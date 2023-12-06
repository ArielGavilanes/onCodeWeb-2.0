import { Test, TestingModule } from '@nestjs/testing';
import { CursoContenidoController } from './curso_contenido.controller';

describe('CursoContenidoController', () => {
  let controller: CursoContenidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CursoContenidoController],
    }).compile();

    controller = module.get<CursoContenidoController>(CursoContenidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
