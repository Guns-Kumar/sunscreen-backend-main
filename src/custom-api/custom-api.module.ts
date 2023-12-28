import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomLibrary, LibrarySchema } from 'src/schemas/custom-api-schema';
import { CustomApiController } from './custom-api.controller';
import { CustomService } from './custom-api.service';

@Module({
  controllers: [CustomApiController],
  providers: [CustomService],
  imports: [
    MongooseModule.forFeature([{ name: CustomLibrary.name, schema: LibrarySchema }])
  ],
})
export class CustomApiModule {}
