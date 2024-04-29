import {Component, OnInit, OnDestroy} from '@angular/core';
import {MainFrameService} from './main-frame.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-main-frame',
    templateUrl: './main-frame.component.html',
    styleUrls: ['./main-frame.component.scss'],
})
export class MainFrameComponent implements OnInit, OnDestroy {
    // Current "opened" status of the main nav bar
    mainNavIsOpen = true;

    // Current "opened" status of the sub nav bar
    subNavIsOpen = true;

    // Event subscription for the nav toggle button in the header
    private subscription: Subscription;

    constructor(private mainFrameService: MainFrameService) {
        this.subscription = new Subscription();
    }

    ngOnInit() {
        // Subscribe to the nav toggle button in the header
        this.subscription = this.mainFrameService.navToggleData.subscribe(
            () => {
                this.mainNavIsOpen = !this.mainNavIsOpen;
            },
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
