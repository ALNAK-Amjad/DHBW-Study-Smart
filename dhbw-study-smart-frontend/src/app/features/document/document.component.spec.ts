import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DocumentComponent } from './document.component';

describe('DocumentComponent', () => {
    let component: DocumentComponent;
    let fixture: ComponentFixture<DocumentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            declarations: [DocumentComponent]
        });
        fixture = TestBed.createComponent(DocumentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
