import {
  Table,
  Model,
  Column,
  DataType,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasOne,
  HasMany,
} from 'sequelize-typescript';
import { Hospital_img } from 'src/hospital_img/hospital_img.model';
import { Location } from 'src/location/location.model';
import { Service } from 'src/service/service.model';
import { User } from 'src/users/entities/user.entity';
import { Users } from 'src/users/user.model';

@Table({ tableName: 'hospital' })
export class Hospital extends Model<Hospital> {
  @AutoIncrement
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @HasOne(() => Location)
  location: Location;

  @HasMany(() => Hospital_img)
  hospital_img: Hospital_img[];

  @HasMany(() => Service)
  services: Service[];

  @HasOne(() => Users)
  doctors: Users;
}
