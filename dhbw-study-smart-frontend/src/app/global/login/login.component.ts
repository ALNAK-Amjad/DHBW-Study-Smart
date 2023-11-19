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

    // Test
    responseTest: any;

    constructor(private loginService: LoginService) { }

    // Invoke Backend-Request for Login
    onSubmit() {
        this.loginService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
            .subscribe(
                data => {
                    console.log(data);
                    this.responseTest = data;
                    // handle successful login
                },
                error => {
                    console.log(error);
                    // handle error
                });
    }
}
