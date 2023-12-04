import { Test, TestingModule } from '@nestjs/testing';
import { SearchSystemController } from './search-system.controller';

describe('SearchSystemController', () => {
  let controller: SearchSystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchSystemController],
    }).compile();

    controller = module.get<SearchSystemController>(SearchSystemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
