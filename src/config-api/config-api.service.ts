import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigApiDto } from '../dto/config-api.dto';
import { Library } from '../schemas/config-api.schema';


@Injectable()
export class ConfigService {
    
  constructor(@InjectModel(Library.name) private configModel: Model<Library>) {}

  async create(createConfigDto: ConfigApiDto): Promise<Library> {
    const createdConfig = new this.configModel(createConfigDto);
    return createdConfig.save();
  }

  async findAll(): Promise<Library[]> {
    return this.configModel.find().exec();
  }

  async update(id: string, editConfigDto: ConfigApiDto): Promise<Library> {
    const existingConfig = await this.configModel.findById(id);
    if (!existingConfig) {
      throw new NotFoundException(`Config library with ID ${id} not found`);
    }
    existingConfig.set(editConfigDto);
    return existingConfig.save();
  }
}