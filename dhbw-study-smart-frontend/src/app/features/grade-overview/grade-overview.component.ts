import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import {GradeService} from './grade.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

// Definition of the GradeOverviewComponent
@Component({
    selector: 'app-grade-overview',
    templateUrl: './grade-overview.component.html',
    styleUrls: ['./grade-overview.component.scss'],
})
export class GradeOverviewComponent implements OnInit {
    // Definition of forms and arrays for data
    gradeForm: FormGroup;
    semesters: any[] = [];
    courses: any[] = [];
    groupedCourses: any[] = [];
    grades: any[] = [];

    // The constructor initializes services and FormBuilder
    constructor(
        private fb: FormBuilder,
        private gradeService: GradeService,
        private snackBar: MatSnackBar,
        private router: Router,
    ) {
        // Initializing gradeForm with various fields and validations
        this.gradeForm = this.fb.group({
            semester: [],
            courses: this.fb.array([]),
            actualGradeAverage: [{value: 0, disabled: true}],
            plannedGradeAverage: [{value: 0, disabled: true}],
        });
    }

    // ngOnInit is called when the component is initialized
    ngOnInit(): void {
        const userIdString = localStorage.getItem('userId');

        if (userIdString !== null) {
            const numericUserId = Number(userIdString);

            if (numericUserId > 0) {
                // Load semesters, calculate average grades, and load grades if user ID is valid
                this.getSemesters();
                this.updateAverages();
                this.loadGrades(numericUserId);
            } else {
                // Zeigt Fehlermeldung, wenn Benutzer-ID nicht gültig ist
                this.openSnackBar('Keine gültige Benutzer-ID gefunden. Bitte melden Sie sich erneut an.', 'Fehler');
            }
        } else {
            this.router.navigate(['/login']);
            // Zeigt Fehlermeldung, wenn Benutzer-ID nicht im LocalStorage gefunden wurde
            this.openSnackBar('Keine Benutzer-ID im LocalStorage gefunden. Bitte melden Sie sich erneut an.', 'Fehler');
        }
    }

    // Loads grades based on user ID
    loadGrades(userId: number): void {
        this.gradeService.getAllGrades(userId).subscribe(
            (data: any[]) => {
                this.grades = data;
                this.populateCoursesWithGrades();
            },
            (error: any) => {
                // Zeigt Fehlermeldung, wenn es ein Problem beim Laden der Noten gibt
                this.openSnackBar('Es gab ein Problem beim Laden der Noten. Bitte versuche es erneut.', 'Fehler');
            },
        );
    }

    // Populates course forms with the loaded grades
    populateCoursesWithGrades(): void {
        const coursesFormArray = this.getCoursesFormArray();

        this.courses.forEach((course, index) => {
            const grade = this.grades.find((g) => g.lectureId === course.lectureId);
            if (grade) {
                coursesFormArray.at(index).patchValue({
                    plannedGrade: grade.plannedGrade,
                    grade: grade.grade,
                });
            }
        });

        this.groupedCourses.forEach((group, groupIndex) => {
            group.lectures.forEach((course: any, courseIndex: number) => {
                const grade = this.grades.find((g) => g.lectureId === course.lectureId.lectureId);
                if (grade) {
                    const formArrayIndex = this.getFormGroupIndex(groupIndex, courseIndex);
                    coursesFormArray.at(formArrayIndex).patchValue({
                        plannedGrade: grade.plannedGrade,
                        grade: grade.grade,
                    });
                }
            });
        });

        this.updateAverages();
    }

    // Loads the semesters
    getSemesters(): void {
        this.gradeService.getSemesters().subscribe((semesters) => {
            this.semesters = semesters;
        }, (error) => {
            // Zeigt Fehlermeldung, wenn es ein Problem beim Laden der Semester gibt
            this.openSnackBar('Fehler beim Laden der Semester:', error);
        });
    }

    // Called when the semester changes and loads the corresponding courses
    onSemesterChange(semesterId: number): void {
        this.gradeService.getCoursesBySemester(semesterId).subscribe((courses) => {
            this.gradeService.getGroupedCoursesBySemester(semesterId).subscribe((groupedCourses) => {
                this.groupedCourses = groupedCourses;

                const groupedCourseIds = new Set(groupedCourses.flatMap((group) => group.lectures.map((lecture: any) => lecture.lectureId.lectureId)));
                this.courses = courses.filter((course) => !groupedCourseIds.has(course.lectureId));

                this.setCoursesFormArray(this.courses);
                this.setGroupedCoursesFormArray(groupedCourses);

                const userIdString = localStorage.getItem('userId');
                if (userIdString !== null) {
                    const userId = Number(userIdString);
                    this.loadGrades(userId);
                }
            }, (error) => {
                this.openSnackBar('Fehler beim Laden der Gruppierten Kurse: ', error);
            });
        }, (error) => {
            this.openSnackBar('Fehler beim Laden der Kurse: ', error);
        });
    }

    // Sets the course form array with course data
    setCoursesFormArray(courses: any[]): void {
        const courseFormArray = this.getCoursesFormArray();
        courseFormArray.clear();
        courses.forEach(() => {
            const courseFormGroup = this.fb.group({
                plannedGrade: ['', Validators.required],
                session: [''],
                grade: ['', Validators.required],
            });
            courseFormGroup.valueChanges.subscribe(() => this.updateAverages());
            courseFormArray.push(courseFormGroup);
        });
        this.updateAverages();
    }

    // Sets the form array for grouped courses
    setGroupedCoursesFormArray(groupedCourses: any[]): void {
        const courseFormArray = this.getCoursesFormArray();
        groupedCourses.forEach((group) => {
            group.lectures.forEach(() => {
                const courseFormGroup = this.fb.group({
                    plannedGrade: ['', Validators.required],
                    session: [''],
                    grade: ['', Validators.required],
                });
                courseFormGroup.valueChanges.subscribe(() => this.updateAverages());
                courseFormArray.push(courseFormGroup);
            });
        });
        this.updateAverages();
    }

    // Returns the form array of courses
    getCoursesFormArray(): FormArray {
        return this.gradeForm.get('courses') as FormArray;
    }

    // Calculates the index of a form within the form array based on group membership
    getFormGroupIndex(groupIndex: number, courseIndex: number): number {
        const totalUngroupedCourses = this.courses.length;
        return totalUngroupedCourses + groupIndex * this.groupedCourses[groupIndex].lectures.length + courseIndex;
    }

    // Updates the average grades based on the current values in the form
    updateAverages(): void {
        const coursesFormArray = this.getCoursesFormArray();
        let totalActual = 0;
        let totalPlanned = 0;
        let countActual = 0;
        let countPlanned = 0;

        coursesFormArray.controls.forEach((control) => {
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
            plannedGradeAverage: plannedAverage,
        });
    }

    // Saves the grade of a specific course
    submitCourseGrade(index: number): void {
        const courseFormArray = this.getCoursesFormArray();
        const courseFormGroup = courseFormArray.at(index) as FormGroup;

        if (!courseFormGroup.valid) {
            this.openSnackBar('Bitte füllen Sie alle erforderlichen Felder aus.', 'Fehler');
            return;
        }

        const courseGradeData = courseFormGroup.value;
        const userIdString = localStorage.getItem('userId');
        if (userIdString !== null) {
            const userId = Number(userIdString);
            let lectureId: number | undefined;

            // Find the lecture ID based on the index
            if (index < this.courses.length) {
                lectureId = this.courses[index].lectureId;
            } else {
                let adjustedIndex = index - this.courses.length;
                for (const group of this.groupedCourses) {
                    if (adjustedIndex < group.lectures.length) {
                        lectureId = group.lectures[adjustedIndex].lectureId.lectureId;
                        break;
                    }
                    adjustedIndex -= group.lectures.length;
                }
            }

            if (typeof lectureId !== 'number') {
                this.openSnackBar('Die Kurs-ID ist nicht definiert. Überprüfen Sie die Kursdaten.', 'Fehler');
                return;
            }

            if (courseGradeData.grade > 6 || courseGradeData.grade < 1 || courseGradeData.plannedGrade > 6 || courseGradeData.plannedGrade < 1) {
                this.openSnackBar('Noteninformationen sind nicht Korrekt. Bitte überprüfen Sie Ihre Eingaben.', 'Fehler');
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
                    this.openSnackBar('Die Noten wurden erfolgreich eingetragen.', 'Erfolg');
                    this.loadGrades(userId);
                },
                (error: any) => {
                    this.openSnackBar('Es gab ein Problem beim Speichern der Noten. Bitte versuche es erneut.', 'Fehler');
                },
            );
        }
    }

    // Opens a snackbar with a message
    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }
}
