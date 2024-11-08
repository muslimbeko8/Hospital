import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Hospital } from './hospital.model';
import { Service } from 'src/service/service.model';
import { Location } from 'src/location/location.model';
import { Hospital_img } from 'src/hospital_img/hospital_img.model';
import { Op } from 'sequelize';
import { Users } from 'src/users/user.model';

@Injectable()
export class HospitalService {
  constructor(
    @InjectModel(Hospital) private readonly hospitalModel: typeof Hospital,
    @InjectModel(Service) private readonly serviceModel: typeof Service,
  ) {}

  async create(createHospitalDto: CreateHospitalDto) {
    return this.hospitalModel.create(createHospitalDto);
  }

  async findAll() {
    return this.hospitalModel.findAll({
      include: [
        {
          model: Location,
          attributes: ['longs', 'lats'],
        },
        {
          model: Hospital_img,
          attributes: ['img'],
        },
        {
          model: Service,
          include: [
            {
              model: Users,
              attributes: ['id'],
            },
          ],
        },
        {
          model: Users,
        },
      ],
    });
  }

  // doctor_id:2

  async findOne(id: number) {
    const hospital = await this.hospitalModel.findByPk(id);
    if (!hospital) {
      throw new NotFoundException(`Hospital with ID ${id} not found`);
    }
    return hospital;
  }

  async update(id: number, updateHospitalDto: UpdateHospitalDto) {
    const [updated] = await this.hospitalModel.update(updateHospitalDto, {
      where: { id },
    });

    if (!updated) {
      throw new NotFoundException(`Hospital with ID ${id} not found`);
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    const deleted = await this.hospitalModel.destroy({ where: { id } });
    if (!deleted) {
      throw new NotFoundException(`Hospital with ID ${id} not found`);
    }
    return { message: 'Hospital successfully deleted' };
  }

  async searchHospitals(name: string) {
    console.log(name);

    const hospitals = await this.hospitalModel.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`,
        },
      },
    });

    const services = await this.serviceModel.findAll({
      where: {
        name: {
          [Op.like]: `${name}%`,
        },
      },
    });

    return [...hospitals, ...services].map((obj: Hospital | Service) => {
      if (obj instanceof Hospital) {
        return {
          id: obj.id,
          name: obj.name,
        };
      } else {
        return {
          id: obj.id,
          name: obj.name,
          price: obj.price,
          doctor_id: obj.doctor_id,
          hospital_id: obj.hospital_id,
        };
      }
    });
  }
}
