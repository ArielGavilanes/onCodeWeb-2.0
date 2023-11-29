import { Test, TestingModule } from '@nestjs/testing';
import { InsertUsuarioController } from './insert-usuario.controller';

describe('InsertUsuarioController', () => {
  let controller: InsertUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsertUsuarioController],
    }).compile();

    controller = module.get<InsertUsuarioController>(InsertUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
