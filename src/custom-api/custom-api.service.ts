import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomLibrary } from 'src/schemas/custom-api-schema';
import { CustomApiDto } from 'src/dto/custom-api.dto';


@Injectable()
export class CustomService {    
  constructor(@InjectModel(CustomLibrary.name) private customModel: Model<CustomLibrary>) {}

  async create(createCustomDto: CustomApiDto): Promise<CustomLibrary> {
    const createCustom = new this.customModel(createCustomDto);
    return createCustom.save();
  }

  async findAll(): Promise<CustomLibrary[]> {
    return this.customModel.find().exec();
  }

  async update(id: string, editCustomDto: CustomApiDto): Promise<CustomLibrary> {
    const existingCustom = await this.customModel.findById(id);
    if (!existingCustom) {
      throw new NotFoundException(`Custom library with ID ${id} not found`);
    }
    existingCustom.set(editCustomDto);
    return existingCustom.save();
  }
}