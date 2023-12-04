import { TestBed } from '@angular/core/testing';

import { SearchSystemService } from './search-system.service';

describe('SearchSystemService', () => {
  let service: SearchSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
