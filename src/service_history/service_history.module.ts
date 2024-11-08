import { Module } from '@nestjs/common';
import { ServiceHistoryService } from './service_history.service';
import { ServiceHistoryController } from './service_history.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Service_history } from './service_history.model';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Service_history]), UsersModule],
  controllers: [ServiceHistoryController],
  providers: [ServiceHistoryService],
})
export class ServiceHistoryModule {}
