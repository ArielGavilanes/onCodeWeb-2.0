import { TestBed } from '@angular/core/testing';

import { UseriInfoService } from './useri-info.service';

describe('UseriInfoService', () => {
  let service: UseriInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseriInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
