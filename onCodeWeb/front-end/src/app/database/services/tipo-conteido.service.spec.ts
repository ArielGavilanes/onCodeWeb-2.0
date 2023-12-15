import { TestBed } from '@angular/core/testing';

import { TipoConteidoService } from './tipo-conteido.service';

describe('TipoConteidoService', () => {
  let service: TipoConteidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoConteidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
