import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceHistoryDto } from './dto/create-service_history.dto';
import { UpdateServiceHistoryDto } from './dto/update-service_history.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Service_history } from './service_history.model';

@Injectable()
export class ServiceHistoryService {
  constructor(
    @InjectModel(Service_history)
    private readonly serviceHistoryModel: typeof Service_history,
  ) {}

  async create(createServiceHistoryDto: CreateServiceHistoryDto) {
    return this.serviceHistoryModel.create(createServiceHistoryDto);
  }

  async findAll() {
    return this.serviceHistoryModel.findAll();
  }

  async findOne(id: number) {
    const serviceHistory = await this.serviceHistoryModel.findByPk(id);
    if (!serviceHistory) {
      throw new NotFoundException(`Service history with ID ${id} not found`);
    }
    return serviceHistory;
  }

  async update(id: number, updateServiceHistoryDto: UpdateServiceHistoryDto) {
    const [updated] = await this.serviceHistoryModel.update(updateServiceHistoryDto, {
      where: { id },
    });

    if (!updated) {
      throw new NotFoundException(`Service history with ID ${id} not found`);
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    const deleted = await this.serviceHistoryModel.destroy({ where: { id } });
    if (!deleted) {
      throw new NotFoundException(`Service history with ID ${id} not found`);
    }
    return { message: 'Service history successfully deleted' };
  }
}
