import { Test, TestingModule } from '@nestjs/testing';
import { CreateCursoService } from './create-curso.service';

describe('CreateCursoService', () => {
  let service: CreateCursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateCursoService],
    }).compile();

    service = module.get<CreateCursoService>(CreateCursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
