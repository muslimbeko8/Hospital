import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Service } from './service.model';
import { Users } from 'src/users/user.model';

@Injectable()
export class ServiceService {
  constructor(
    @InjectModel(Service) private readonly serviceModel: typeof Service,
  ) {}

  async create(createServiceDto: CreateServiceDto) {
    return this.serviceModel.create(createServiceDto);
  }

  async findAll() {
    return this.serviceModel.findAll({
      include: {
        model: Users,
      },
    });
  }

  async findOne(id: number) {
    const service = await this.serviceModel.findByPk(id);
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const updated = await this.serviceModel.update(updateServiceDto, {
      where: { id },
    });

    if (!updated) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }

    return this.findOne(id); // Retrieve the updated record
  }

  async remove(id: number) {
    const deleted = await this.serviceModel.destroy({ where: { id } });
    if (!deleted) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return { message: 'Service successfully deleted' };
  }
}
