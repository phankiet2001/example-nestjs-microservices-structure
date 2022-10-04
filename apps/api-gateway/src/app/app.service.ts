import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('USERS_SERVICES') private readonly userServices: ClientProxy
  ) {}

  getData(): { message: string } {
    this.userServices.emit('test-data', { email: 'hehe' });
    return { message: 'Welcome to api-gateway!' };
  }
}
