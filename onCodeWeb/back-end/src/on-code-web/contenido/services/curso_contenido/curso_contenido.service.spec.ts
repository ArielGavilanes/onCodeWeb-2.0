import { Test, TestingModule } from '@nestjs/testing';
import { CursoContenidoService } from './curso_contenido.service';

describe('CursoContenidoService', () => {
  let service: CursoContenidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CursoContenidoService],
    }).compile();

    service = module.get<CursoContenidoService>(CursoContenidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
