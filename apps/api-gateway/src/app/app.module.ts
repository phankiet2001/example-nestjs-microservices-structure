import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS_SERVICES',
        transport: Transport.TCP,
        options: {
          port: 3001
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
