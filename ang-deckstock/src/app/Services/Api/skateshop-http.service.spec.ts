import { TestBed } from '@angular/core/testing';

import { SkateshopHttpService } from './skateshop-http.service';

describe('SkateshopHttpService', () => {
  let service: SkateshopHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkateshopHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
