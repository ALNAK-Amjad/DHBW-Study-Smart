import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entities/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private baseUrl = 'http://localhost:8080/user/';

    constructor(
        private http: HttpClient,
    ) {}

    /**
     * Get all user data from a given user ID
     *
     * @param {number} userId
     * User ID to search for
     *
     * @returns {Observable<User>} User Entity Observable
     *
     * @example
     * User object with contained data
     * ```ts
     * user = {
     *     // User table columns from the DB
     *     userId: 1,
     *     email: 'example@example.com',
     *     firstName: 'Max',
     *     lastName: 'Mustermann',
     *     studentNumber: 12345,
     *
     *     // Contained data
     *     course: {
     *         courseId: 1,
     *         name: 'TINF22B4',
     *     },
     *     semester: {
     *         semesterId: 4,
     *     }
     *     studyProgram: {
     *         studyProgram_id: 2,
     *         etcs: 210,
     *         name: 'Wirtschaftsinformatik',
     *         semesterCount: 6,
     *     }
     * }
     * ```
     */
    public getUserById(userId: number): Observable<User> {
        // Prepare request parameters
        const queryParams= {
            userId: userId,
        };

        return this.http.get<User>(this.baseUrl + 'getUserById', {params: queryParams});
    }
}
