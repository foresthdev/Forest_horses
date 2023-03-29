import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Auto-validation ensuring all endpoints are protected from receiving incorrect data.
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  //automatically remove non-whitelisted properties, you can stop the request from processing when non-whitelisted properties are present, and return an error response to the user.

  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
