import {Component} from '@angular/core';
import {LoginService} from './login.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginUserDTO} from 'src/app/shared/dto/login-user-dto';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    loginForm: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    loginResponseData: null | LoginUserDTO = null;

    constructor(
        private loginService: LoginService,
        private router: Router,
    ) { }

    // Invoke Backend-Request for Login
    onSubmit() {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;

        this.loginService.login(email, password)
            .subscribe({
                next: (data) => {
                    // Save Response Data
                    this.loginResponseData = data;

                    // Navigate to main page on successful login
                    if (this.loginResponseData?.verified) {
                        // @TODO save loggedIn status differently (cookie, etc.)
                        localStorage.setItem('isLoggedIn', 'true');
                        localStorage.setItem('userId', `${this.loginResponseData?.userId}`);

                        this.router.navigate(['']);
                    }
                },
                error: (error) => {
                    console.log(error);
                    // @TODO handle error
                },
            });
    }
}
