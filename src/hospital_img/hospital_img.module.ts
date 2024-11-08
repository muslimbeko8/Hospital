import { Module } from '@nestjs/common';
import { HospitalImgService } from './hospital_img.service';
import { HospitalImgController } from './hospital_img.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hospital_img } from './hospital_img.model';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Hospital_img]), UsersModule],
  controllers: [HospitalImgController],
  providers: [HospitalImgService],
})
export class HospitalImgModule {}
