import { TestBed } from '@angular/core/testing';

import { AcquistiService } from './acquisti.service';

describe('AcquistiService', () => {
  let service: AcquistiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcquistiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
