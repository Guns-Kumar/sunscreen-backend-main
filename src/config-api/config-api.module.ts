import { Module } from '@nestjs/common';
import { ConfigApiController } from './config-api.controller';
import { ConfigService } from './config-api.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Library, LibrarySchema } from '../schemas/config-api.schema';
// import { DatabaseSetup } from '../database-setup';

@Module({
  controllers: [ConfigApiController],
  providers: [ConfigService],
  imports: [
    MongooseModule.forFeature([{ name: Library.name, schema: LibrarySchema }])
    
  ],
})
export class ConfigApiModule {}
