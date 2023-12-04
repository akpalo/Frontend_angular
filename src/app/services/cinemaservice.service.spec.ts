import { TestBed } from '@angular/core/testing';

import { CinemaserviceService } from '../services/cinemaService.service';

describe('CinemaserviceService', () => {
  let service: CinemaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
