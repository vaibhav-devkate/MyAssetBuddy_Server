import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import logger from '../services/logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = logger;

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      const statusCode = res.statusCode;
      if (statusCode === 401 || statusCode === 404 || statusCode === 405) {
        this.logger.warn(`[${req.method}] ${req.url} - ${statusCode}`);
      } else if (statusCode >= 500) {
        this.logger.error(`[${req.method}] ${req.url} - ${statusCode}`);
      } else {
        this.logger.log(`[${req.method}] ${req.url} - ${statusCode}`);
      }
    });
    next();
  }
}
