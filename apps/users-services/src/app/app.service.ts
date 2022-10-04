import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly userNames: string[] = [];

  getData(): { message: string } {
    return { message: 'Welcome to users-services!' };
  }


  testData(data: string) {
    this.userNames.push(data);
    return this.userNames;
  }
}
