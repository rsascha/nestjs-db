import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  const logger = new Logger("main -> bootstrap()");
  
  const options = new DocumentBuilder()
    .setTitle('nestjs-db example')
    .setDescription('The nestjs-db API description')
    .setVersion('0.1')
    .addTag('nestjs-db')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  logger.log(`Starting http://localhost:${port}/swagger`);
  
  logger.log(`Starting http://localhost:${port}`);
  await app.listen(port);
}
bootstrap();
