import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './global/login/login.component';
import { RegistrationComponent } from './global/registration/registration.component';
import { MainFrameComponent } from './global/main-frame/main-frame.component';

// Child Routes displayed inside the main frame
const featureRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
];

// Default Routes
const routes: Routes = [
    {
        path: '',
        component: MainFrameComponent,
        canActivate: [], // @TODO Add AuthGuard (check if user if logged in)
        children: featureRoutes
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
