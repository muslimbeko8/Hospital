import {
  Column,
  Model,
  Table,
  DataType,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Hospital } from 'src/hospital/hospital.model';
import { Users } from 'src/users/user.model';

@Table({ tableName: 'service' })
export class Service extends Model<Service> {
  @AutoIncrement
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  doctor_id: number;
  @BelongsTo(() => Users)
  doctor: Users;

  @ForeignKey(() => Hospital)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  hospital_id: number;

  @BelongsTo(() => Hospital)
  hospital: Hospital;
}
