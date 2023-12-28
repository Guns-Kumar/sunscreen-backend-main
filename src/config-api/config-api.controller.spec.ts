import { Test, TestingModule } from '@nestjs/testing';
import { ConfigApiController } from './config-api.controller';

describe('ConfigApiController', () => {
  let controller: ConfigApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfigApiController],
    }).compile();

    controller = module.get<ConfigApiController>(ConfigApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
