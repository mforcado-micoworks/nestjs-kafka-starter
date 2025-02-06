import { Module } from '@nestjs/common';
import { HelloKafkaController } from './hello-kafka.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'nestjs-client',
            brokers: ['localhost:9094'],
          },
          consumer: {
            groupId: 'nestjs-group',
          },
        },
      },
    ]),
  ],
  controllers: [HelloKafkaController],
})
export class HelloKafkaModule {}
