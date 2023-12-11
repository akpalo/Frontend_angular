import { TestBed } from '@angular/core/testing';

import { LippuService } from './lippu.service';

describe('LippuService', () => {
  let service: LippuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LippuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
