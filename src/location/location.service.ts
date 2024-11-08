import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Location } from './location.model';

@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location) private readonly locationModel: typeof Location,
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    return this.locationModel.create(createLocationDto);
  }

  async findAll() {
    return this.locationModel.findAll();
  }

  async findOne(id: number) {
    const location = await this.locationModel.findByPk(id);
    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return location;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    const [updated] = await this.locationModel.update(updateLocationDto, {
      where: { id },
    });

    if (!updated) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    const deleted = await this.locationModel.destroy({ where: { id } });
    if (!deleted) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }
    return { message: 'Location successfully deleted' };
  }
}
