import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Document} from 'src/app/shared/entities/document';

@Injectable({
    providedIn: 'root',
})
export class DocumentService {
    private baseUrl = 'http://localhost:8080/document';

    constructor(private http: HttpClient) {}

    public getAllDocumentEntities(): Observable<Document[]> {
        const requestUrl = this.baseUrl + '/getall';

        return this.http.get<Document[]>(requestUrl);
    }

    public downloadFile(id: number): Observable<Blob> {
        const requestUrl = this.baseUrl + '/download/' + id;

        return this.http.get(requestUrl, {responseType: 'blob'});
    }
}
