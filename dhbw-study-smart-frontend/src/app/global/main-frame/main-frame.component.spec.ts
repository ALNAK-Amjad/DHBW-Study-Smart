import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { MainFrameComponent } from './main-frame.component';
import { MainFrameHeaderComponent } from './main-frame-header/main-frame-header.component';
import { MainFrameSideNavComponent } from './main-frame-side-nav/main-frame-side-nav.component';
import { MainFrameSubSideNavComponent } from './main-frame-sub-side-nav/main-frame-sub-side-nav.component';


describe('MainFrameComponent', () => {
    let component: MainFrameComponent;
    let fixture: ComponentFixture<MainFrameComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                MatSidenavModule,
                BrowserAnimationsModule,
                MatIconModule,
                RouterTestingModule
            ],
            declarations: [
                MainFrameComponent,
                MainFrameHeaderComponent,
                MainFrameSideNavComponent,
                MainFrameSubSideNavComponent
            ]
        });
        fixture = TestBed.createComponent(MainFrameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
