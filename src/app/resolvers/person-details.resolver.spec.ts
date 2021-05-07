import { TestBed } from '@angular/core/testing';

import { PersonDetailsResolver } from './person-details.resolver';

describe('PersonDetailsResolver', () => {
  let resolver: PersonDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PersonDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
