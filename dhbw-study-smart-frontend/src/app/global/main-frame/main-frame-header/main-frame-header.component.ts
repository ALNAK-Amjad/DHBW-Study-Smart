import {Component, Injectable} from '@angular/core';
import {MainFrameService} from '../main-frame.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main-frame-header',
    templateUrl: './main-frame-header.component.html',
    styleUrls: ['./main-frame-header.component.scss'],
})
@Injectable({
    providedIn: 'root',
})
export class MainFrameHeaderComponent {
    constructor(
        private mainFrameService: MainFrameService,
        private router: Router,
    ) { }

    // Trigger event when the nav toggle button is clicked
    public triggerNavToggle() {
        this.mainFrameService.emitNavToggle('Nav Toggle in Header triggered');
    }

    // Logout user when the logout button is clicked
    public logout() {
        // Remove user data from cache
        localStorage.removeItem('userId');
        localStorage.removeItem('isLoggedIn');
        this.router.navigate(['/login']);
    }
}
