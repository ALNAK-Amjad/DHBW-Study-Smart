import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DocumentComponent} from './document.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('DocumentComponent', () => {
    let component: DocumentComponent;
    let fixture: ComponentFixture<DocumentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                MatExpansionModule,
                BrowserAnimationsModule,
            ],
            declarations: [DocumentComponent],
        });
        fixture = TestBed.createComponent(DocumentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
