import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainFrameSubSideNavComponent} from './main-frame-sub-side-nav.component';

describe('MainFrameSubSideNavComponent', () => {
    let component: MainFrameSubSideNavComponent;
    let fixture: ComponentFixture<MainFrameSubSideNavComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MainFrameSubSideNavComponent],
        });
        fixture = TestBed.createComponent(MainFrameSubSideNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
