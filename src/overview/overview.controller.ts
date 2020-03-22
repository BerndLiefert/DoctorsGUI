import { Controller, Get, Render } from '@nestjs/common';

@Controller('overview')
export class OverviewController {  
    @Get()
    @Render('overview')
    view() {}
}
