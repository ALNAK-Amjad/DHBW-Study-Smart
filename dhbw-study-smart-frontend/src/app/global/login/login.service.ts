import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginUserDTO} from 'src/app/shared/dto/login-user-dto';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private http: HttpClient) { }

    // Invoke a GET-Request for Login
    login(email: string, password: string): Observable<LoginUserDTO> {
        const queryParams = {'email': email, 'password': password};

        return this.http.get<LoginUserDTO>(`http://localhost:8080/user/verify`, {params: queryParams});
    }
}
