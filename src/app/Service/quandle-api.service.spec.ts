import { TestBed } from '@angular/core/testing';

import { QuandleAPIService } from './quandle-api.service';

describe('QuandleAPIService', () => {
  let service: QuandleAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuandleAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
