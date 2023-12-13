import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudyProgram } from 'src/app/shared/entities/study-program';
import { Course } from 'src/app/shared/entities/course';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        studyProgramId: new FormControl(null),
        courseId: new FormControl(null),
        studentNumber: new FormControl('', [Validators.required])
    });

    // All selectable study programs for the select input field
    studyPrograms: StudyProgram[] = [];

    // All selectable courses for the 2nd select input field
    courses: Course[] = [];

    constructor(
        private registrationService: RegistrationService,
        private router: Router
    ) { }

    // Initialize the component
    ngOnInit() {
        this.getAllStudyPrograms();
        this.getAllCourses();
    }

    // Get all study programs for the select input
    private getAllStudyPrograms(): void {
        this.registrationService.getStudyPrograms().subscribe((data: StudyProgram[]) => {
            this.studyPrograms = data;
        });
    }

    // Get all courses for the select input
    private getAllCourses(): void {
        this.registrationService.getCourses().subscribe((data: Course[]) => {
            this.courses = data;
        });
    }

    // Invoke Backend-Request to register a new user
    onSubmit() {
        this.registrationService.register(this.registrationForm.value).subscribe({
            next: (data) => {
                console.log(data);

                // Forward to Login Page on successful registration
                this.router.navigate(['/login']);
            },
            error: (error) => {
                console.log(error);
                // @TODO handle error
            }
        });
    }

}
