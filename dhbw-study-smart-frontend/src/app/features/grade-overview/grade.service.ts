import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GradeDTO} from 'src/app/shared/dto/grade-dto';
import {Course} from 'src/app/shared/entities/course';
import {StudyProgram} from 'src/app/shared/entities/study-program';

@Injectable({
    providedIn: 'root'
})
export class GradeService {

    constructor(private http: HttpClient) {
    }

    getStudyPrograms(): Observable<StudyProgram[]> {
        const requestUrl = 'http://localhost:8080/studyprogram/getall';

        return this.http.get<StudyProgram[]>(requestUrl);
    }

    getCourses(): Observable<Course[]> {
        const requestUrl = 'http://localhost:8080/course/getall';

        return this.http.get<Course[]>(requestUrl);
    }

    addGrade(formData: GradeDTO): Observable<unknown> {
        const requestUrl = 'http://localhost:8080/api/grades/addGrade';

        return this.http.post(requestUrl, formData);
    }

    getSemesters(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:8080/semester/getall');
    }

    getCoursesBySemester(semesterId: number): Observable<any[]> {
        return this.http.get<any[]>(`http://localhost:8080/lecture/getLecturesBySemester/${semesterId}`);
    }
}
