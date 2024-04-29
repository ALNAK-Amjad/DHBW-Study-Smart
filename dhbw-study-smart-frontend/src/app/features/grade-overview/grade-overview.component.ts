import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule} from '@angular/forms';
import {GradeService} from './grade.service';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import Swal from "sweetalert2";
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-grade-overview',
    templateUrl: './grade-overview.component.html',
    styleUrls: ['./grade-overview.component.scss'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatExpansionModule,
        MatSelectModule,
        MatButtonModule
    ],
    standalone: true
})
export class GradeOverviewComponent implements OnInit {
    gradeForm: FormGroup;
    semesters: any[] = [];
    courses: any[] = [];

    constructor(
        private fb: FormBuilder,
        private gradeService: GradeService
    ) {
        this.gradeForm = this.fb.group({
            semester: ['', Validators.required],
            courses: this.fb.array([]),
            actualGradeAverage: [{value: 0, disabled: true}],
            plannedGradeAverage: [{value: 0, disabled: true}]
        });
    }

    ngOnInit(): void {
        this.getSemesters();
        this.updateAverages();

    }

    // Get all available semesters
    getSemesters(): void {
        this.gradeService.getSemesters().subscribe(semesters => {
            this.semesters = semesters;
        }, error => {
            console.error('Fehler beim Laden der Semester: ', error);
        });
    }

    // Get all available lectures by semester id
    onSemesterChange(semesterId: number): void {
        this.gradeService.getCoursesBySemester(semesterId).subscribe(courses => {
            this.courses = courses;
            this.setCoursesFormArray(courses);
            this.updateAverages();
        }, error => {
            console.error('Fehler beim Laden der Kurse:', error);
        });
    }

    // To generate the form for the available courses pro semester
    setCoursesFormArray(courses: any[]): void {
        const courseFormArray = this.getCoursesFormArray();
        courseFormArray.clear();
        courses.forEach(course => {
            const courseFormGroup = this.fb.group({
                plannedGrade: ['', Validators.required],
                session: [''],
                grade: ['', Validators.required]
            });
            courseFormGroup.valueChanges.subscribe(() => this.updateAverages());
            courseFormArray.push(courseFormGroup);
        });
        this.updateAverages();
    }

    getCoursesFormArray(): FormArray {
        return this.gradeForm.get('courses') as FormArray;
    }

    updateAverages(): void {
        const coursesFormArray = this.getCoursesFormArray();
        let totalActual = 0;
        let totalPlanned = 0;
        let countActual = 0;
        let countPlanned = 0;

        coursesFormArray.controls.forEach(control => {
            const gradeValue = control.get('grade')?.value;
            const plannedGradeValue = control.get('plannedGrade')?.value;

            if (gradeValue) {
                totalActual += parseFloat(gradeValue);
                countActual++;
            }
            if (plannedGradeValue) {
                totalPlanned += parseFloat(plannedGradeValue);
                countPlanned++;
            }
        });

        const actualAverage = countActual > 0 ? (totalActual / countActual).toFixed(2) : '0';
        const plannedAverage = countPlanned > 0 ? (totalPlanned / countPlanned).toFixed(2) : '0';

        this.gradeForm.patchValue({
            actualGradeAverage: actualAverage,
            plannedGradeAverage: plannedAverage
        });
    }


    submitCourseGrade(index: number): void {
        const courseFormGroup = (this.gradeForm.get('courses') as FormArray).at(index) as FormGroup;

        // Überprüfen, ob das FormGroup gültig ist
        if (!courseFormGroup.valid) {
            Swal.fire("Fehler", "Bitte füllen Sie alle erforderlichen Felder aus.", "error");
            return;
        }

        const courseGradeData = courseFormGroup.value;
        const userId = Number(localStorage.getItem('userId'));
        const courseData = this.courses[index];
        const lectureId = courseData?.lectureId;

        // Sicherstellen, dass die Kurs-ID definiert ist
        if (typeof lectureId !== 'number') {
            console.error('Die Kurs-ID ist nicht definiert:', courseData);
            Swal.fire("Fehler", "Die Kurs-ID ist nicht definiert. Überprüfen Sie die Kursdaten.", "error");
            return;
        }

        // Sicherstellen, dass keine wesentlichen Felder leer sind
        if (!courseGradeData.grade || !courseGradeData.plannedGrade) {
            Swal.fire("Fehler", "Noteninformationen sind unvollständig. Bitte überprüfen Sie Ihre Eingaben.", "error");
            return;
        }

        const formData = {
            grade: courseGradeData.grade,
            plannedGrade: courseGradeData.plannedGrade,
            userId: userId,
            lectureId: lectureId,
        };

        // Senden der Daten an den Server
        this.gradeService.addGrade(formData).subscribe(
            (data: any) => {
                Swal.fire("Erfolg", "Die Noten wurden erfolgreich eingetragen.", "success");
            },
            (error: any) => {
                console.error('Fehler beim Eintragen der Noten:', error);
                Swal.fire("Fehler", "Es gab ein Problem beim Speichern der Noten. Bitte versuche es erneut.", "error");
            }
        );
    }

}
