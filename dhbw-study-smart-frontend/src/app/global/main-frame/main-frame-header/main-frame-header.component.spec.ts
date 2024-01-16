import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { MainFrameHeaderComponent } from './main-frame-header.component';

describe('MainFrameHeaderComponent', () => {
    let component: MainFrameHeaderComponent;
    let fixture: ComponentFixture<MainFrameHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MatIconModule],
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
