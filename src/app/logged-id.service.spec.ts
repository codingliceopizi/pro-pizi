import { TestBed } from '@angular/core/testing';

import { LoggedIdService } from './logged-id.service';

describe('LoggedIdService', () => {
  let service: LoggedIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
