import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppService } from './app.service';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [LoggerModule.forRoot()],
  providers: [AppService, LoggerService],
})
export class AppModule {}
