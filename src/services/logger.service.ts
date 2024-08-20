import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import 'winston-daily-rotate-file';

// reference: https://lsmod.medium.com/nestjs-setting-up-file-logging-daily-rotation-with-winston-28147af56ec4#:~:text=Nest%20Provides%20a%20default%20logger,easily%20replace%20the%20default%20logger.
const createLoggerConfig = {
  transports: [
    new transports.DailyRotateFile({
      filename: `logs/%DATE%-combined.log`,
      format: format.combine(format.timestamp(), format.json()),
      datePattern: 'YYYY-MM-DD',
      zippedArchive: false,
      maxFiles: '1d',
    }),
  ],
};

const logger = WinstonModule.createLogger(createLoggerConfig);
export default logger;
