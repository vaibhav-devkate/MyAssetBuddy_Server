import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ALLOWED_ORIGINS } from './constants/env';
import injectMiddlewares from './middleware/inject.middleware';
import { ValidationPipe } from '@nestjs/common';
import { ConfigurationService } from './modules/configuration/configuration.service';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api'); // set a prefix for every route registered in an HTTP application
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.enableCors({
    origin: ALLOWED_ORIGINS, // Allow all origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    // allowedHeaders: 'Content-Type, Accept', // Headers that are allowed
    credentials: true,
  });

  injectMiddlewares(app);
  const appConfig: ConfigurationService = app.get(ConfigurationService);
  await app.listen(appConfig.port, () => {
    console.log(`running on ${appConfig.port}`);
  });
}
bootstrap();
