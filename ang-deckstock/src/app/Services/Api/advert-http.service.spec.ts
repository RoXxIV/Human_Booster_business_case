import { TestBed } from '@angular/core/testing';

import { AdvertHttpService } from './advert-http.service';

describe('AdvertHttpService', () => {
  let service: AdvertHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
