import { Test, TestingModule } from '@nestjs/testing';
import { GetCursoService } from './get-curso.service';

describe('GetCursoService', () => {
  let service: GetCursoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCursoService],
    }).compile();

    service = module.get<GetCursoService>(GetCursoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
