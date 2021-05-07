import { TestBed } from '@angular/core/testing';

import { RocketServiceService } from './rocket-service.service';

describe('RocketServiceService', () => {
  let service: RocketServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RocketServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
