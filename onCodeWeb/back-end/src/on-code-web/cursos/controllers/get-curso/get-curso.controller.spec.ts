import { Test, TestingModule } from '@nestjs/testing';
import { GetCursoController } from './get-curso.controller';

describe('GetCursoController', () => {
  let controller: GetCursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetCursoController],
    }).compile();

    controller = module.get<GetCursoController>(GetCursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
