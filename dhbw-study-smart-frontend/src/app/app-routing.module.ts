import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './global/login/login.component';
import {RegistrationComponent} from './global/registration/registration.component';
import {MainFrameComponent} from './global/main-frame/main-frame.component';
import {AuthGuard} from './global/route-guard/auth.guard';
import {LectureComponent} from './features/lecture/lecture.component';
import {DocumentComponent} from './features/document/document.component';
import {CalendarComponent} from './features/calendar/calendar.component';
import {GradeOverviewComponent} from './features/grade-overview/grade-overview.component';

// Child Routes displayed inside the main frame
const featureRoutes: Routes = [
    {
        path: '',
        redirectTo: 'lectures',
        pathMatch: 'full',
    },
    {
        path: 'lectures',
        component: LectureComponent,
    },
    {
        path: 'documents',
        component: DocumentComponent,
    },
    {
        path: 'calendar',
        component: CalendarComponent,
    },
    {
        path: 'grades',
        component: GradeOverviewComponent,
    },
];

// Default Routes
const routes: Routes = [
    {
        path: '',
        component: MainFrameComponent,
        canActivate: [AuthGuard],
        children: featureRoutes,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'registration',
        component: RegistrationComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
