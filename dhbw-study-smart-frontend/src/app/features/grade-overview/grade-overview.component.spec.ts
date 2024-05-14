import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GradeOverviewComponent } from './grade-overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

describe('GradeOverviewComponent', () => {
    let component: GradeOverviewComponent;
    let fixture: ComponentFixture<GradeOverviewComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MatExpansionModule,
                BrowserAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatSnackBarModule,
                MatInputModule,
                MatSelectModule,
            ],
            declarations: [GradeOverviewComponent]
        });
        fixture = TestBed.createComponent(GradeOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
