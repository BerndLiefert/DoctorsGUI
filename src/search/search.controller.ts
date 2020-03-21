import { Controller, Get, Render, Param } from '@nestjs/common';

@Controller('search')
export class SearchController {
    @Get()
    @Render('search')
    search() {}
}
