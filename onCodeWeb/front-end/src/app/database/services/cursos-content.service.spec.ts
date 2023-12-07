import { TestBed } from '@angular/core/testing';

import { CursosContentService } from './cursos-content.service';

describe('CursosContentService', () => {
  let service: CursosContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
