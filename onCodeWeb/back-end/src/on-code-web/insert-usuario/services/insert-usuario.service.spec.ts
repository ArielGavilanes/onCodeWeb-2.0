import { Test, TestingModule } from '@nestjs/testing';
import { InsertUsuarioService } from './insert-usuario.service';

describe('InsertUsuarioService', () => {
  let service: InsertUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsertUsuarioService],
    }).compile();

    service = module.get<InsertUsuarioService>(InsertUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
