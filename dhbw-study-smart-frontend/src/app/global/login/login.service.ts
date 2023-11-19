import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) { }

    // Invoke a GET-Request for Login
    login(username: string, password: string): Observable<any> {
        return this.http.get(`http://localhost:8080/user/verify?email=${username}&password=${password}`);
    }
}
