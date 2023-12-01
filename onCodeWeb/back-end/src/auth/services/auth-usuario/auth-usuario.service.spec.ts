import { Test, TestingModule } from '@nestjs/testing';
import { AuthUsuarioService } from './auth-usuario.service';

describe('AuthUsuarioService', () => {
  let service: AuthUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthUsuarioService],
    }).compile();

    service = module.get<AuthUsuarioService>(AuthUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
