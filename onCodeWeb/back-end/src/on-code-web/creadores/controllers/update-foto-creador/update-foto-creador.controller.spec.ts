import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFotoCreadorController } from './update-foto-creador.controller';

describe('UpdateFotoCreadorController', () => {
  let controller: UpdateFotoCreadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UpdateFotoCreadorController],
    }).compile();

    controller = module.get<UpdateFotoCreadorController>(UpdateFotoCreadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
