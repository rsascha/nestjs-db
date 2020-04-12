import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  const logger = new Logger("main -> bootstrap()");
  logger.log(`Starting http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
