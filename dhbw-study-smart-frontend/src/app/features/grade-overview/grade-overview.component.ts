import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {MaterialModule} from "../../global/angular-material-module/material.module";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {GradeService} from './grade.service';
import {StudyProgram} from "../../shared/entities/study-program";
import {Course} from "../../shared/entities/course";
import {RegistrationService} from "../../global/registration/registration.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-grade-overview',
    templateUrl: './grade-overview.component.html',
    styleUrls: ['./grade-overview.component.scss'],
    standalone: true,
    imports: [MatExpansionModule, MaterialModule, ReactiveFormsModule],
})

export class GradeOverviewComponent implements OnInit {
    gradeForm: FormGroup = new FormGroup({
        lectureId: new FormControl("", [Validators.required]),
        grade: new FormControl("", [Validators.required]),
        plannedGrade: new FormControl("", [Validators.required]),

    })

    // All selectable study programs for the select input field
    studyPrograms: StudyProgram[] = [];

    // All selectable courses for the 2nd select input field
    courses: Course[] = [];

    constructor(
        private gradeService: GradeService,
        private registrationService: RegistrationService,
        private router: Router
    ) {
    }

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

    panelOpenState = false;

    onSubmit() {
        console.log(this.gradeForm.value);
        const userId = Number(localStorage.getItem('userId'));
        const formData = {
            grade: this.gradeForm.value.grade,
            plannedGrade: this.gradeForm.value.plannedGrade,
            userId: userId,
            lectureId: this.gradeForm.value.lectureId,
        }
        this.gradeService.addGrade(formData).subscribe(
            (data: any) => {
                Swal.fire({
                    title: "Noten erfolgreich eingetragen!",
                    text: "Die Noten wurden erfolgreich gespeichert.",
                    icon: "success"
                });
            },
            (error: any) => {
                Swal.fire({
                    title: "Fehler beim Eintragen der Daten!",
                    text: "Es gab ein Problem beim Speichern der Noten. Bitte versuche es erneut.",
                    icon: "error"
                });
            }
        );
    }
}
