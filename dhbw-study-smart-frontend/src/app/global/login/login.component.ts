import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    loginResponseData: null | { verified: boolean; userId: number; } = null;

    constructor(private loginService: LoginService) { }

    // Invoke Backend-Request for Login
    onSubmit() {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;

        this.loginService.login(email, password)
            .subscribe({
                next: (data) => {
                    this.loginResponseData = data;
                    // @TODO forward to main application on successful login
                },
                error: (error) => {
                    console.log(error);
                    // @TODO handle error
                }
            });

    }
}
