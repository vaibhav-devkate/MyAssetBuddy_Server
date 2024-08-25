import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigurationModule } from './modules/configuration/configuration.module';

@Module({
  imports: [ConfigurationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
