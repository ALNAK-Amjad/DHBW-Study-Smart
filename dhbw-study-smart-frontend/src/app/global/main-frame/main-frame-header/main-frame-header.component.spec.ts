import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrameHeaderComponent } from './main-frame-header.component';

describe('MainFrameHeaderComponent', () => {
    let component: MainFrameHeaderComponent;
    let fixture: ComponentFixture<MainFrameHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MainFrameHeaderComponent]
        });
        fixture = TestBed.createComponent(MainFrameHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
