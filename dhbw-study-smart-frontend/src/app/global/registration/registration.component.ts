import { Component } from '@angular/core';
import { RegistrationService } from './registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
    registrationForm: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        studentNumber: new FormControl('', [Validators.required])
    });

    constructor(private registrationService: RegistrationService) { }

    // Invoke Backendrequest to register a new User
    onSubmit() {
        this.registrationService.register(this.registrationForm.value)
            .subscribe({
                next: (data) => {
                    console.log(data);
                    // @TODO forward to main application on successful login
                },
                error: (error) => {
                    console.log(error);
                    // @TODO handle error
                }
            });
    }

}
