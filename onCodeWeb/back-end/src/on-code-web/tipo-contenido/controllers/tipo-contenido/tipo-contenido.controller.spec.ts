import { Test, TestingModule } from '@nestjs/testing';
import { TipoContenidoController } from './tipo-contenido.controller';

describe('TipoContenidoController', () => {
  let controller: TipoContenidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoContenidoController],
    }).compile();

    controller = module.get<TipoContenidoController>(TipoContenidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
