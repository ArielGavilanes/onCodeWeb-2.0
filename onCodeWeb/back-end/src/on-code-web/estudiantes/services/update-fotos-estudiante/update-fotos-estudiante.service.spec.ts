import { Test, TestingModule } from '@nestjs/testing';
import { UpdateFotosEstudianteService } from './update-fotos-estudiante.service';

describe('UpdateFotosEstudianteService', () => {
  let service: UpdateFotosEstudianteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateFotosEstudianteService],
    }).compile();

    service = module.get<UpdateFotosEstudianteService>(UpdateFotosEstudianteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
