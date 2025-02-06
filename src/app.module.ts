import { Module } from '@nestjs/common';
import { HelloKafkaModule } from './resources/hello-kafka/hello-kafka.module';

@Module({
  imports: [HelloKafkaModule],
})
export class AppModule {}
