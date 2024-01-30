import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationUserDTO } from 'src/app/shared/dto/registration-user-dto';
import { Course } from 'src/app/shared/entities/course';
import { StudyProgram } from 'src/app/shared/entities/study-program';
import { Semester } from 'src/app/shared/entities/semester';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor(private http: HttpClient) { }

    // Get all available study prgrams
    getStudyPrograms(): Observable<StudyProgram[]> {
        const requestUrl = 'http://localhost:8080/studyprogram/getall';

        return this.http.get<StudyProgram[]>(requestUrl);
    }

    // Get all available courses
    getCourses(): Observable<Course[]> {
        const requestUrl = 'http://localhost:8080/course/getall';

        return this.http.get<Course[]>(requestUrl);
    }

    // Get all available semesters
    getSemesters(): Observable<Semester[]> {
        const requestUrl = 'http://localhost:8080/semester/getall';

        return this.http.get<Semester[]>(requestUrl);
    }

    // Invoke a POST-Request to register a new user
    register(formData: RegistrationUserDTO): Observable<unknown> {
        const requestUrl = 'http://localhost:8080/user/register';

        return this.http.post(requestUrl, formData);
    }
}
