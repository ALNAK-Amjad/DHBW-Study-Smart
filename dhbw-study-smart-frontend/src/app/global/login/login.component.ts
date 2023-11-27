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

    constructor(private loginService: LoginService) { }

    // Invoke Backend-Request for Login
    onSubmit() {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;

        this.loginService.login(email, password)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    // handle successful login
                },
                error: (error) => {
                    console.log(error);
                    // handle error
                }
            });

    }
}
