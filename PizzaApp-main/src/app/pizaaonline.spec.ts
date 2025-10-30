import { TestBed } from '@angular/core/testing';

import { Pizaaonline } from './pizaaonline';

describe('Pizaaonline', () => {
  let service: Pizaaonline;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pizaaonline);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
