import { Controller, Get, Render, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {

  }
/*
  @Get('/foo:id')
  view(@Query() params) {
    this.appService.getAnswers(params.id);
  }
*/
}
