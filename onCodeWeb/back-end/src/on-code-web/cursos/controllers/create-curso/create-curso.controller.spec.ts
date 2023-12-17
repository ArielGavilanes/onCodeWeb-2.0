import { Test, TestingModule } from '@nestjs/testing';
import { CreateCursoController } from './create-curso.controller';

describe('CreateCursoController', () => {
  let controller: CreateCursoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateCursoController],
    }).compile();

    controller = module.get<CreateCursoController>(CreateCursoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
