import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { reitinvalvojaGuard } from './reitinvalvoja.guard';

describe('reitinvalvojaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => reitinvalvojaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
