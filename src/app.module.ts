import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { SharedModule } from './common/config/shared.module';
import { ServiceModule } from './service/service.module';
import { LocationModule } from './location/location.module';
import { HospitalImgModule } from './hospital_img/hospital_img.module';
import { ServiceHistoryModule } from './service_history/service_history.module';
import { HospitalModule } from './hospital/hospital.module';

@Module({
  imports: [
    SharedModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      database: 'postgres',
      username: 'postgres',
      password: '123456',
      host: '127.0.0.1',
      port: 5432,
      autoLoadModels: true,
      synchronize: true,
      // sync: { force: true },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'uploads'),
      serveRoot: '/static',
    }),
    UsersModule,
    ServiceModule,
    LocationModule,
    HospitalImgModule,
    ServiceHistoryModule,
    HospitalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}