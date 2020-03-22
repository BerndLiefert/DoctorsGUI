import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OverviewController } from './overview/overview.controller';
import { SearchController } from './search/search.controller';
import { ResultsController } from './results/results.controller';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  })],
  controllers: [AppController, OverviewController, SearchController, ResultsController],
  providers: [AppService],
})
export class AppModule {}
