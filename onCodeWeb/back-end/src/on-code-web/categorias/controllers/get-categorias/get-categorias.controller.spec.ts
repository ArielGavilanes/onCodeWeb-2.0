import { Test, TestingModule } from '@nestjs/testing';
import { GetCategoriasController } from './get-categorias.controller';

describe('GetCategoriasController', () => {
  let controller: GetCategoriasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCategoriasController],
    }).compile();

    controller = module.get<GetCategoriasController>(GetCategoriasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
