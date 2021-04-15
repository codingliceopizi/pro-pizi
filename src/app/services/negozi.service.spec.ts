import { TestBed } from '@angular/core/testing';

import { NegoziService } from './negozi.service';

describe('NegoziService', () => {
  let service: NegoziService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegoziService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
