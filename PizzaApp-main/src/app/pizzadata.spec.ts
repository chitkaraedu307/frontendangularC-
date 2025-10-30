import { TestBed } from '@angular/core/testing';

import { Pizzadata } from './pizzadata';

describe('Pizzadata', () => {
  let service: Pizzadata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pizzadata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
