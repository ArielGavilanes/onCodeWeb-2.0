import { Test, TestingModule } from '@nestjs/testing';
import { GetCategoriasService } from './get-categorias.service';

describe('GetCategoriasService', () => {
  let service: GetCategoriasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetCategoriasService],
    }).compile();

    service = module.get<GetCategoriasService>(GetCategoriasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
