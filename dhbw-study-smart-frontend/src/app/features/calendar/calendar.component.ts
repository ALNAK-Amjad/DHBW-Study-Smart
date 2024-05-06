import {Component, OnInit} from '@angular/core';
import {
    CalendarEvent,
    CalendarEventTimesChangedEvent,
    CalendarView,
} from 'angular-calendar';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {Subject} from 'rxjs';

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

    // All appointments to be displayed in the calendar
    displayedEvents: CalendarEvent[] = [];

    // Used to re-render the view of the calendar
    refresh = new Subject<void>();

    ngOnInit(): void {
        // Set German date locale
        registerLocaleData(localeDe, this.locale);

        // Test
        this.displayedEvents.push({
            title: 'test',
            start: new Date(),
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        });
    }

    // Save new times when event have been dragged/edited
    public eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
        event.start = newStart;
        event.end = newEnd;
        this.refresh.next();
    }
}
