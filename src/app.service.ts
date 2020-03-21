import { Injectable, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) { }

  getHello(): string {
    return 'Hello World!';
  }

  getAnswers(id: number): string {
    const SERVER_URI = this.configService.get<string>('SERVER_URI');
    console.log(SERVER_URI + '/' + id);
    return "foo";
  }
}
