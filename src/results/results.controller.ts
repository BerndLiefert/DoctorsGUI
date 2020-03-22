import { Controller, Render, Get } from '@nestjs/common';

@Controller('results')
export class ResultsController {
    @Get()
    @Render('results')
    view() {}
}
