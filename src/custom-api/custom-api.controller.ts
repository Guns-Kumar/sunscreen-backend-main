import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CustomLibrary } from 'src/schemas/custom-api-schema';
import { CustomApiDto } from 'src/dto/custom-api.dto';
import { CustomService } from './custom-api.service';

@Controller('api')
export class CustomApiController {
  constructor(private readonly customService: CustomService) {}

  @Get('custom')
  async getCustomData(): Promise<CustomLibrary[]>{
    return this.customService.findAll();
  }
  
  @Post('custom')
  async createCustomData(@Body() createCustomDto: CustomApiDto): Promise<CustomLibrary>{
    return this.customService.create(createCustomDto)
  }

  @Put('custom')
  async editCustomData(@Query('id') id: string, @Body() editCustomDto: CustomApiDto): Promise<CustomLibrary> {
    return this.customService.update(id, editCustomDto);
  }

}
