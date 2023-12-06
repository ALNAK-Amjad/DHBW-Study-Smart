import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrameSideNavComponent } from './main-frame-side-nav.component';

describe('MainFrameSideNavComponent', () => {
    let component: MainFrameSideNavComponent;
    let fixture: ComponentFixture<MainFrameSideNavComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MainFrameSideNavComponent]
        });
        fixture = TestBed.createComponent(MainFrameSideNavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
