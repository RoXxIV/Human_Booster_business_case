import { TestBed } from '@angular/core/testing';

import { BrandHttpService } from './brand-http.service';

describe('BrandHttpService', () => {
  let service: BrandHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
