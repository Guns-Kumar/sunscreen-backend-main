import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

// import { DatabaseSetup } from './database-setup';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // await NestFactory.create(DatabaseSetup);
  app.use(cors());
  await app.listen(8000);
}
bootstrap();
