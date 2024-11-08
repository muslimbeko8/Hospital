import {
  Table,
  Model,
  Column,
  DataType,
  AutoIncrement,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Hospital } from 'src/hospital/hospital.model';

@Table({ tableName: 'hospital_img' })
export class Hospital_img extends Model<Hospital_img> {
  @AutoIncrement
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Hospital)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  hospital_id: number;

  @BelongsTo(() => Hospital)
  hospital: Hospital;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  img: string;
}
