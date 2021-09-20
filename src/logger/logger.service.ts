import { Inject, Injectable } from '@nestjs/common';
import { Logger, Params, PARAMS_PROVIDER_TOKEN, PinoLogger } from 'nestjs-pino';
import { Logger as BaseLogger } from '@nestjs/common';

@Injectable()
export class LoggerService extends Logger {
  constructor(
    logger: PinoLogger,
    @Inject(PARAMS_PROVIDER_TOKEN) params: Params,
  ) {
    super(logger, params);
  }

  verbose(message: any, ...optionalParams: any[]) {
    super.verbose(message, ...optionalParams);
    BaseLogger.flush();
  }

  debug(message: any, ...optionalParams: any[]) {
    super.debug(message, ...optionalParams);
    BaseLogger.flush();
  }

  log(message: any, ...optionalParams: any[]) {
    super.log(message, ...optionalParams);
    BaseLogger.flush();
  }

  warn(message: any, ...optionalParams: any[]) {
    super.warn(message, ...optionalParams);
    BaseLogger.flush();
  }

  error(message: any, ...optionalParams: any[]) {
    super.error(message, ...optionalParams);
    BaseLogger.flush();
  }
}
