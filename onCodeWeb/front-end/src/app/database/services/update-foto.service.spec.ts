import { TestBed } from '@angular/core/testing';

import { UpdateFotoService } from './update-foto.service';

describe('UpdateFotoService', () => {
  let service: UpdateFotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
