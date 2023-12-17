import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFotosEstudianteController } from './update-fotos-estudiante.controller';

describe('UpdateFotosEstudianteController', () => {
  let controller: UpdateFotosEstudianteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateFotosEstudianteController],
    }).compile();

    controller = module.get<UpdateFotosEstudianteController>(UpdateFotosEstudianteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
