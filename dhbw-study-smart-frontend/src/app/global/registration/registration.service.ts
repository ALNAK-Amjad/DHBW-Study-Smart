import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationUserDTO } from 'src/app/shared/dto/registration-user-dto';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {

    constructor(private http: HttpClient) { }

    register(formData: RegistrationUserDTO): Observable<any> {
        const requestUrl = 'http://localhost:8080/user/register';

        return this.http.post(requestUrl, formData);
    }
}
