import {Component, Injectable} from '@angular/core';
import {MainFrameService} from '../main-frame.service';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
    selector: 'app-main-frame-header',
    templateUrl: './main-frame-header.component.html',
    styleUrls: ['./main-frame-header.component.scss']
})
@Injectable({
    providedIn: 'root'
})
export class MainFrameHeaderComponent {

    constructor(private mainFrameService: MainFrameService, private http: HttpClient, private router: Router) {
    }

    // Trigger event when the nav toggle button is clicked
    public triggerNavToggle() {
        this.mainFrameService.emitNavToggle('Nav Toggle in Header triggered');
    }

    logout() {
        this.http.post('http://localhost:8080/user/logout', {}, {responseType: 'text'}) // Beachten Sie den responseType
            .subscribe(
                () => {
                    console.log('Logout successful');
                    localStorage.removeItem('isLoggedIn');
                    localStorage.setItem('isLoggedIn', 'false');
                    localStorage.removeItem('userId');
                    localStorage.setItem('userId', String(null));
                    this.router.navigate(['/login']); // Umleitung zur Login-Seite
                    Swal.fire({
                        title: "Erfolgreich abgemeldet!",
                        text: "Sie Wurden erfolgreich abgemeldet.",
                        icon: "success"
                    });
                },
                error => {
                    Swal.fire({
                        title: "Abmeldung fehlgeschlagen!",
                        text: "Wir könnten Sie nicht erfolgreich abmelden, bitte versuchen Sie erneuert.",
                        icon: "error"
                    });
                    console.error('Logout failed', error);
                }
            );
    }
}
