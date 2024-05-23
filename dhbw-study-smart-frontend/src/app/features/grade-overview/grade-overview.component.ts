import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { GradeService } from './grade.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-grade-overview',
    templateUrl: './grade-overview.component.html',
    styleUrls: ['./grade-overview.component.scss'],
})
export class GradeOverviewComponent implements OnInit {
    gradeForm: FormGroup;
    semesters: any[] = [];
    courses: any[] = [];
    groupedCourses: any[] = [];
    grades: any[] = [];

    constructor(
        private fb: FormBuilder,
        private gradeService: GradeService,
        private snackBar: MatSnackBar
    ) {
        this.gradeForm = this.fb.group({
            semester: [],
            courses: this.fb.array([]),
            actualGradeAverage: [{ value: 0, disabled: true }],
            plannedGradeAverage: [{ value: 0, disabled: true }]
        });
    }

    ngOnInit(): void {
        this.getSemesters();
        this.updateAverages();
    }

    loadGrades(): void {
        this.gradeService.getAllGrades().subscribe(
            (data: any[]) => {
                this.grades = data;
                this.populateCoursesWithGrades();
            },
            (error: any) => {
                console.error('Fehler beim Laden der Noten:', error);
                this.openSnackBar("Es gab ein Problem beim Laden der Noten. Bitte versuche es erneut.", "Fehler");
            }
        );
    }

    populateCoursesWithGrades(): void {
        const coursesFormArray = this.getCoursesFormArray();
        this.courses.forEach((course, index) => {
            const grade = this.grades.find(g => g.lecture.lectureId === course.lectureId);
            if (grade) {
                coursesFormArray.at(index).patchValue({
                    plannedGrade: grade.plannedGrade,
                    session: grade.session,
                    grade: grade.grade
                });
            }
        });

        // Handle grades for grouped courses
        this.groupedCourses.forEach((group, groupIndex) => {
            group.lectures.forEach((course: any, courseIndex: number) => {
                const grade = this.grades.find(g => g.lecture.lectureId === course.lectureId);
                if (grade) {
                    const formArrayIndex = this.getFormGroupIndex(groupIndex, courseIndex);
                    coursesFormArray.at(formArrayIndex).patchValue({
                        plannedGrade: grade.plannedGrade,
                        session: grade.session,
                        grade: grade.grade
                    });
                }
            });
        });

        this.updateAverages();
    }

    getSemesters(): void {
        this.gradeService.getSemesters().subscribe(semesters => {
            this.semesters = semesters;
        }, error => {
            console.error('Fehler beim Laden der Semester: ', error);
        });
    }

    onSemesterChange(semesterId: number): void {
        this.gradeService.getCoursesBySemester(semesterId).subscribe(courses => {
            this.gradeService.getGroupedCoursesBySemester(semesterId).subscribe(groupedCourses => {
                this.groupedCourses = groupedCourses;

                // Filter out courses that are part of a group
                const groupedCourseIds = new Set(groupedCourses.flatMap(group => group.lectures.map((lecture: any) => lecture.lectureId)));
                this.courses = courses.filter(course => !groupedCourseIds.has(course.lectureId));

                this.setCoursesFormArray(this.courses);
                this.setGroupedCoursesFormArray(groupedCourses);
                this.loadGrades();
            }, error => {
                console.error('Fehler beim Laden der Gruppierten Kurse:', error);
            });
        }, error => {
            console.error('Fehler beim Laden der Kurse:', error);
        });
    }

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

    setGroupedCoursesFormArray(groupedCourses: any[]): void {
        const courseFormArray = this.getCoursesFormArray();
        groupedCourses.forEach(group => {
            group.lectures.forEach(() => {
                const courseFormGroup = this.fb.group({
                    plannedGrade: ['', Validators.required],
                    session: [''],
                    grade: ['', Validators.required]
                });
                courseFormGroup.valueChanges.subscribe(() => this.updateAverages());
                courseFormArray.push(courseFormGroup);
            });
        });
        this.updateAverages();
    }

    getCoursesFormArray(): FormArray {
        return this.gradeForm.get('courses') as FormArray;
    }

    getFormGroupIndex(groupIndex: number, courseIndex: number): number {
        const totalUngroupedCourses = this.courses.length;
        return totalUngroupedCourses + groupIndex * this.groupedCourses[groupIndex].lectures.length + courseIndex;
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

        if (!courseFormGroup.valid) {
            this.openSnackBar("Bitte füllen Sie alle erforderlichen Felder aus.", "Fehler");
            return;
        }

        const courseGradeData = courseFormGroup.value;
        const userId = Number(localStorage.getItem('userId'));
        const courseData = this.courses[index];
        const lectureId = courseData?.lectureId;

        if (typeof lectureId !== 'number') {
            console.error('Die Kurs-ID ist nicht definiert:', courseData);
            this.openSnackBar("Die Kurs-ID ist nicht definiert. Überprüfen Sie die Kursdaten.", "Fehler");
            return;
        }

        if (!courseGradeData.grade || !courseGradeData.plannedGrade) {
            this.openSnackBar("Noteninformationen sind unvollständig. Bitte überprüfen Sie Ihre Eingaben.", "Fehler");
            return;
        }

        const formData = {
            grade: courseGradeData.grade,
            plannedGrade: courseGradeData.plannedGrade,
            userId: userId,
            lectureId: lectureId,
        };

        this.gradeService.addGrade(formData).subscribe(
            (data: any) => {
                this.openSnackBar("Die Noten wurden erfolgreich eingetragen.", "Erfolg");
                this.loadGrades();
            },
            (error: any) => {
                console.error('Fehler beim Eintragen der Noten:', error);
                this.openSnackBar("Es gab ein Problem beim Speichern der Noten. Bitte versuche es erneut.", "Fehler");
            }
        );
    }

    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
