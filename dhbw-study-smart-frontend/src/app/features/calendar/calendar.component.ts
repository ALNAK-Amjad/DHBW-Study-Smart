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
    // Appointments of the user
    userAppointments = [];

    constructor(
        private calendarService: CalendarService,
    ) {}

    ngOnInit(): void {
        // Set German date locale
        registerLocaleData(localeDe, this.locale);

        // Get and Initialize timetable data
        this.getTimeTableByCourse('TINF22B4'); // TODO Get course of the current user
        this.getAllAppointmentsByUser(1); // TODO Get user ID of the current user
    }

    // Get timetable from Rapla by the given course
    private getTimeTableByCourse(course: string) {
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
        // TODO Get all appointments from the database
        this.userAppointments = [];
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
    private initializeAppointmentsAsCalendarEvent() {
        // TODO Init all appointments
        // this.displayedEvents.push({
        //     title: 'test',
        //     start: new Date(),
        //     draggable: true,
        //     resizable: {
        //         beforeStart: true,
        //         afterEnd: true,
        //     },
        // });

        // Refresh the calendar
        this.refresh.next();
    }

    // Save new times when event have been dragged/edited
    public eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }
}
