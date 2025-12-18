import { TestBed } from '@angular/core/testing';

import { NumberStore } from './number-store';

describe('NumberStore', () => {
  let service: NumberStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
