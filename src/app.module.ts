import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigApiModule } from './config-api/config-api.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomApiModule } from './custom-api/custom-api.module';

@Module({
  imports: [ConfigApiModule,CustomApiModule,
    MongooseModule.forRoot('mongodb+srv://ganesh1010:ganesh1010@cluster0.ecbqzlj.mongodb.net/sunscreen')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
