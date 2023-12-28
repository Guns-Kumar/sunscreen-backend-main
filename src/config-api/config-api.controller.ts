import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ConfigService } from './config-api.service';
import { Library } from '../schemas/config-api.schema';
import { ConfigApiDto } from '../dto/config-api.dto';

@Controller('api')
export class ConfigApiController {
  constructor(private readonly configService: ConfigService) {}

  @Get('config')
  async getConfigData(): Promise<Library[]> {
    return this.configService.findAll();
  }
  @Post('config')
  async createCustom(@Body() createConfigDto: ConfigApiDto): Promise<Library> {
    return this.configService.create(createConfigDto);
  }

  @Put('config')
  async updateConfig(@Query('id') id: string, @Body() updateConfigDto: ConfigApiDto): Promise<Library>{
    return this.configService.update(id, updateConfigDto)
  }

}
