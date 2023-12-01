import { TestBed } from '@angular/core/testing';

import { AuthBackService } from './auth-back.service';

describe('AuthBackService', () => {
  let service: AuthBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
