import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Location } from './location.model';
import { Hospital } from 'src/hospital/hospital.model';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Location, Hospital]), UsersModule],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
