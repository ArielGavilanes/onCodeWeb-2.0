import { Test, TestingModule } from '@nestjs/testing';
import { GetTipoContenidoService } from './get-tipo-contenido.service';

describe('GetTipoContenidoService', () => {
  let service: GetTipoContenidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetTipoContenidoService],
    }).compile();

    service = module.get<GetTipoContenidoService>(GetTipoContenidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
