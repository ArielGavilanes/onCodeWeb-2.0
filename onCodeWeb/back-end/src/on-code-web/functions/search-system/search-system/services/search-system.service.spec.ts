import { Test, TestingModule } from '@nestjs/testing';
import { SearchSystemService } from './search-system.service';

describe('SearchSystemService', () => {
  let service: SearchSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchSystemService],
    }).compile();

    service = module.get<SearchSystemService>(SearchSystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
