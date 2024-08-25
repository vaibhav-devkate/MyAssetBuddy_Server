import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';
import { ConfigurationService } from './configuration.service';

// config reference: https://www.linkedin.com/pulse/nestjs-project-structure-architecture-demo-becerra-monsalve-m-c-s-3ngge
// config reference: https://github.com/fabecerram/nestjs-basic-architecture-demo/blob/main/src/main.ts
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        PORT: Joi.number(),
        DATABASE_URI: Joi.string(),
      }),
      isGlobal: true,
    }),
  ],
  providers: [ConfigService, ConfigurationService],
  exports: [ConfigService, ConfigurationService],
})
export class ConfigurationModule {}
