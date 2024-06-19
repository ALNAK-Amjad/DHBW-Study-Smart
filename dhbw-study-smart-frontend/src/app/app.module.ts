import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FileSaverModule} from 'ngx-filesaver';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule} from '@angular-material-components/datetime-picker';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './global/login/login.component';
import {MaterialModule} from './global/angular-material-module/material.module';
import {RegistrationComponent} from './global/registration/registration.component';
import {MainFrameComponent} from './global/main-frame/main-frame.component';
import {MainFrameHeaderComponent} from './global/main-frame/main-frame-header/main-frame-header.component';
import {MainFrameSideNavComponent} from './global/main-frame/main-frame-side-nav/main-frame-side-nav.component';
import {MainFrameSubSideNavComponent} from './global/main-frame/main-frame-sub-side-nav/main-frame-sub-side-nav.component';
import {LectureComponent} from './features/lecture/lecture.component';
import {DocumentComponent} from './features/document/document.component';
import {CalendarComponent} from './features/calendar/calendar.component';
import {NewAppointmentPopupComponent} from './features/calendar/new-appointment-popup/new-appointment-popup.component';
import {GradeOverviewComponent} from './features/grade-overview/grade-overview.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        MainFrameComponent,
        MainFrameHeaderComponent,
        MainFrameSideNavComponent,
        MainFrameSubSideNavComponent,
        LectureComponent,
        DocumentComponent,
        CalendarComponent,
        NewAppointmentPopupComponent,
        GradeOverviewComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        FileSaverModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'de-DE'},
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
