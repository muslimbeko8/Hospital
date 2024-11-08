import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from './user.model';
import { Service } from 'src/service/service.model';
import { Hospital } from 'src/hospital/hospital.model';
import { Service_history } from 'src/service_history/service_history.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Users, Service, Hospital, Service_history]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService so other modules can use it
})
export class UsersModule {}
