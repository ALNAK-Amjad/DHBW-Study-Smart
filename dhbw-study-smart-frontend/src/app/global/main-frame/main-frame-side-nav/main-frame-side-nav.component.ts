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
        },
        {
            name: 'Dokumentenübersicht',
            route: '/documents',
        },
        {
            name: 'Vorlesungsübersicht',
            route: '/lectures',
        },
        {
            name: 'Terminplaner',
            route: '/calendar',
        },
        {
            name: 'Karteikartenmanager',
            route: '/flashcards',
        },
    ];
}
