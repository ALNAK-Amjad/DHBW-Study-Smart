import {Component, OnInit} from '@angular/core';
import {
    CalendarEvent,
    CalendarEventTimesChangedEvent,
    CalendarView,
} from 'angular-calendar';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {Subject} from 'rxjs';
import {CalendarService} from './calendar.service';
import {RaplaTimetableLecture} from './calendar-config';
import {UserService} from 'src/app/shared/services/user.service';
import {User} from 'src/app/shared/entities/user';
import {Appointment} from 'src/app/shared/entities/appointment';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
    // Set CalendarView constant
    CalendarView = CalendarView;
    // German date locale
    locale = 'de-DE';
    // Determines if Day, Week or Month calender view should be displayed
    view: CalendarView = CalendarView.Week;
    // Currently selected date
    viewDate: Date = new Date();
    // Used to re-render the view of the calendar
    refresh = new Subject<void>();

    // All appointments to be displayed in the calendar
    displayedEvents: CalendarEvent[] = [];
    // Raw data from Rapla
    raplaTimetableData = [];

    constructor(
        private calendarService: CalendarService,
        private userService: UserService,
    ) {}

    ngOnInit(): void {
        // Set German date locale
        registerLocaleData(localeDe, this.locale);

        // Init. calendar data
        this.initializeCalendar();
    }

    // Initializes the entire calendar with user appointments and timetable data
    private initializeCalendar() {
        // Get user data of the currently logged-in user
        this.getUserData().then((user) => {
            // Get and Initialize timetable and appointments with the given user data
            this.getTimeTableByCourse(user.course?.name);
            this.getAllAppointmentsByUser(user.userId);
        }).catch((err) => {
            console.error('Error initializing calendar:', err);
        });
    }

    // Get all user data from the currently logged in user
    private getUserData(): Promise<User> {
        return new Promise((resolve, reject) => {
            const userId = localStorage.getItem('userId');

            // Check if the user is still logged in
            if (userId && !isNaN(Number(userId))) {
                // Get user data from the backend
                this.userService.getUserById(Number(userId)).subscribe({
                    next: (data) => {
                        resolve(data);
                    },
                    error: (err) => {
                        reject(err);
                    },
                });
            } else {
                reject(new Error('User is no longer authenticated.'));
            }
        });
    }

    // Get timetable from Rapla by the given course
    private getTimeTableByCourse(course: string | undefined) {
        // If the user has no course then early return
        if (course === undefined) {
            return;
        }

        // Get the timetable data and prepare it for the calendar
        this.calendarService.getEventsByCourse(course).subscribe({
            next: (data) => {
                this.initializeTimetableAsCalendarEvent(data);
            },
            error: (err) => {
                console.error('Fetching timetable failed with error:', err);
            },
        });
    }

    // Get all appointments of the current user
    private getAllAppointmentsByUser(userId: number) {
        this.calendarService.getAppointmentsByUserId(Number(userId)).subscribe({
            next: (data) => {
                this.initializeAppointmentsAsCalendarEvent(data);
            },
            error: (err) => {
                console.error('Fetching appointments failed with error:', err);
            },
        });
    }

    // Convert the timetable data from Rapla to `CalendarEvent` objects
    private initializeTimetableAsCalendarEvent(lectures: RaplaTimetableLecture[]) {
        for (const lecture of lectures) {
            this.displayedEvents.push({
                title: lecture.name,
                start: new Date(lecture.startTime),
                end: new Date(lecture.endTime),
                color: {
                    primary: 'black',
                    secondary: 'lightgrey',
                },
            });
        }

        // Refresh the calendar
        this.refresh.next();
    }

    // Convert appointments to `CalendarEvent` objects
    private initializeAppointmentsAsCalendarEvent(appointments: Appointment[]) {
        for (const appointment of appointments) {
            this.displayedEvents.push({
                title: appointment.title,
                start: new Date(appointment.startDate),
                end: new Date(appointment.endDate),
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true,
                },
            });
        }

        // Refresh the calendar
        this.refresh.next();
    }

    // Save new times when event have been dragged/edited
    public eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }

    // Change calendar view to previous Day/Week/Month
    public previousButtonClicked() {
        // Check current view
        switch (this.view) {
            case CalendarView.Day:
                this.viewDate.setDate(this.viewDate.getDate() - 1);
                break;
            case CalendarView.Week:
                this.viewDate.setDate(this.viewDate.getDate() - 7);
                break;
            case CalendarView.Month:
                this.viewDate.setMonth(this.viewDate.getMonth() - 1);
                break;
            default:
                break;
        }

        // Refresh the calendar
        this.refresh.next();
    }

    // Change calendar view to today
    public todayButtonClicked() {
        // Set to current day
        this.viewDate = new Date();

        // Refresh the calendar
        this.refresh.next();
    }

    // Change calendar view to next Day/Week/Month
    public nextButtonClicked() {
        // Check current view
        switch (this.view) {
            case CalendarView.Day:
                this.viewDate.setDate(this.viewDate.getDate() + 1);
                break;
            case CalendarView.Week:
                this.viewDate.setDate(this.viewDate.getDate() + 7);
                break;
            case CalendarView.Month:
                this.viewDate.setMonth(this.viewDate.getMonth() + 1);
                break;
            default:
                break;
        }

        // Refresh the calendar
        this.refresh.next();
    }

    // Create a new appointment
    public createAppointment() {
        // todo
    }
}
