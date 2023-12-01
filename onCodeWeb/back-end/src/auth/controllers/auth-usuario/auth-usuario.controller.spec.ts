import { Test, TestingModule } from '@nestjs/testing';
import { AuthUsuarioController } from './auth-usuario.controller';

describe('AuthUsuarioController', () => {
  let controller: AuthUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthUsuarioController],
    }).compile();

    controller = module.get<AuthUsuarioController>(AuthUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
