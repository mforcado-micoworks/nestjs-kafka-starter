import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class HelloKafkaController {
  @MessagePattern('createHelloKafka')
  create(@Payload() createHelloKafkaDto: string) {
    console.log(createHelloKafkaDto);
  }
}
