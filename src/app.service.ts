import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  test() {
    this.logger.log('test message');
    // Logger.flush();
  }
}
