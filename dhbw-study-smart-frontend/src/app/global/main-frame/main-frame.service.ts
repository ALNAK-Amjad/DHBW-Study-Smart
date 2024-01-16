import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MainFrameService {

    // Listen to this Subject to detect nav toggle triggers
    private navToggle = new Subject<any>();
    navToggleData = this.navToggle.asObservable();

    // Emit nav toggle event
    emitNavToggle(value: any) {
        this.navToggle.next(value);
    }
}