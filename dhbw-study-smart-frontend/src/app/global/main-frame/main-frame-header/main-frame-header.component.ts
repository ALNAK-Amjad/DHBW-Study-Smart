import {Component} from '@angular/core';
import {MainFrameService} from '../main-frame.service';

@Component({
    selector: 'app-main-frame-header',
    templateUrl: './main-frame-header.component.html',
    styleUrls: ['./main-frame-header.component.scss'],
})
export class MainFrameHeaderComponent {
    constructor(private mainFrameService: MainFrameService) {}

    // Trigger event when the nav toggle button is clicked
    public triggerNavToggle() {
        this.mainFrameService.emitNavToggle('Nav Toggle in Header triggered');
    }
}
