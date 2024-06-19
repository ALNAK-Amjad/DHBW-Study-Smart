import {Component} from '@angular/core';

@Component({
    selector: 'app-main-frame-side-nav',
    templateUrl: './main-frame-side-nav.component.html',
    styleUrls: ['./main-frame-side-nav.component.scss'],
})
export class MainFrameSideNavComponent {
    // List of Features to display in the navigation bar
    featureList = [
        {
            name: 'Notenplaner',
            route: '/grades',
            active: true,
        },
        {
            name: 'Dokumentenübersicht',
            route: '/documents',
            active: true,
        },
        {
            name: 'Terminplaner',
            route: '/calendar',
            active: true,
        },
        {
            name: 'Vorlesungsübersicht',
            route: '/lectures',
            active: false,
        },
        {
            name: 'Karteikartenmanager',
            route: '/flashcards',
            active: false,
        },
    ];
}
