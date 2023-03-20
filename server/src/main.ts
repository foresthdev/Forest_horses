import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Auto-validation ensuring all endpoints are protected from receiving incorrect data.
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
