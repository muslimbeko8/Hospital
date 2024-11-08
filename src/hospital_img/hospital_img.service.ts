import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHospitalImgDto } from './dto/create-hospital_img.dto';
import { UpdateHospitalImgDto } from './dto/update-hospital_img.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Hospital_img } from './hospital_img.model';

@Injectable()
export class HospitalImgService {
  constructor(
    @InjectModel(Hospital_img)
    private readonly hospitalImgModel: typeof Hospital_img,
  ) {}

  async create(createHospitalImgDto: CreateHospitalImgDto) {
    return this.hospitalImgModel.create(createHospitalImgDto);
  }

  async findAll() {
    return this.hospitalImgModel.findAll();
  }

  async findOne(id: number) {
    const hospitalImg = await this.hospitalImgModel.findByPk(id);
    if (!hospitalImg) {
      throw new NotFoundException(`Hospital image with ID ${id} not found`);
    }
    return hospitalImg;
  }

  async update(id: number, updateHospitalImgDto: UpdateHospitalImgDto) {
    const [updated] = await this.hospitalImgModel.update(updateHospitalImgDto, {
      where: { id },
    });

    if (!updated) {
      throw new NotFoundException(`Hospital image with ID ${id} not found`);
    }

    return this.findOne(id); // Retrieve the updated record
  }

  async remove(id: number) {
    const deleted = await this.hospitalImgModel.destroy({ where: { id } });
    if (!deleted) {
      throw new NotFoundException(`Hospital image with ID ${id} not found`);
    }
    return { message: 'Hospital image successfully deleted' };
  }
}
