import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CalendarService {
    private baseUrl = 'http://localhost:8080/appointment';

    constructor(private http: HttpClient) {}

    // Get all lectures from Rapla by the given course
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getEventsByCourse(course: string): Observable<any> {
        /**
         * Build the url path for the course, i.e.: 'KA-TINF22B4/events'
         * This is required to get the correct data from Rapla
         */
        const courseUrlPath = 'KA-' + course + '/events';

        return this.http.get(this.baseUrl + '/proxy', {params: {url: courseUrlPath}});
    }
}
