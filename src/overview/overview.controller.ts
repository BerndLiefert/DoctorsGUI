import { Controller, Get, Render, Param } from '@nestjs/common';

@Controller('overview')
export class OverviewController {  
    @Get(':id')
    @Render('overview')
    overview(@Param() params) {
        console.log(params.id);
    }
}
