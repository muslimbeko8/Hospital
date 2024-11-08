import {
  Table,
  Model,
  Column,
  DataType,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Hospital } from 'src/hospital/hospital.model';
import { Service } from 'src/service/service.model';

@Table({ tableName: 'users' })
export class Users extends Model<Users> {
  @AutoIncrement
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  first_name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  last_name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  tel_number: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  password: string;

  // @AllowNull(false)
  @Column({
    type: DataType.DATE,
  })
  birth: Date;

  @Column({
    type: DataType.ENUM('admin', 'user', 'superAdmin', 'doctor', 'boss'),
    defaultValue: 'user',
  })
  role: 'admin' | 'user' | 'superAdmin' | 'doctor' | 'boss';

  @AllowNull(true)
  @Column({
    type: DataType.STRING,
  })
  profile_photo: string;

  @ForeignKey(() => Hospital)
  @Column({
    type: DataType.INTEGER,
  })
  hospital_id: number;
  
  @BelongsTo(() => Hospital)
  hospital: Hospital;

  @HasMany(() => Service)
  Service: Service[];
}
