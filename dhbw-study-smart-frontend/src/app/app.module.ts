import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FileSaverModule} from 'ngx-filesaver';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './global/login/login.component';
import {MaterialModule} from './global/angular-material-module/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegistrationComponent} from './global/registration/registration.component';
import {MainFrameComponent} from './global/main-frame/main-frame.component';
import {MainFrameHeaderComponent} from './global/main-frame/main-frame-header/main-frame-header.component';
import {MainFrameSideNavComponent} from './global/main-frame/main-frame-side-nav/main-frame-side-nav.component';
import {MainFrameSubSideNavComponent} from './global/main-frame/main-frame-sub-side-nav/main-frame-sub-side-nav.component';
import {LectureComponent} from './features/lecture/lecture.component';
import {DocumentComponent} from './features/document/document.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

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
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FileSaverModule,
        CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
