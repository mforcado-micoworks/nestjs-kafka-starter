import { Test, TestingModule } from '@nestjs/testing';
import { HelloKafkaController } from './hello-kafka.controller';

describe('HelloKafkaController', () => {
  let controller: HelloKafkaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloKafkaController],
    }).compile();

    controller = module.get<HelloKafkaController>(HelloKafkaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
