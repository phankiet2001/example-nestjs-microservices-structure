import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @EventPattern('test-data')
  ping(data: { email: string }) {
    return this.appService.testData(data?.email);
  }
}
