import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  // set body parser to false and then re-add express.json()
  // this is because this interferes with mikro-orm middleware
  app.use(express.json());
  await app.listen(3000);
}
bootstrap();
