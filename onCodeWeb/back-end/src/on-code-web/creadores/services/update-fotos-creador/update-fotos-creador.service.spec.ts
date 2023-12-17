import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFotosCreadorService } from './update-fotos-creador.service';

describe('UpdateFotosCreadorService', () => {
  let service: UpdateFotosCreadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateFotosCreadorService],
    }).compile();

    service = module.get<UpdateFotosCreadorService>(UpdateFotosCreadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
