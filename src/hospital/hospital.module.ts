import { Module } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { HospitalController } from './hospital.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hospital } from './hospital.model';
import { Service } from 'src/service/service.model';
import { Location } from 'src/location/location.model';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Hospital, Location, Service]), UsersModule],
  controllers: [HospitalController],
  providers: [HospitalService],
})
export class HospitalModule {}
