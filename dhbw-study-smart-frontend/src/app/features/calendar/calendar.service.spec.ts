import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {CalendarService} from './calendar.service';

describe('CalendarService', () => {
    let service: CalendarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CalendarService],
        });
        service = TestBed.inject(CalendarService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
