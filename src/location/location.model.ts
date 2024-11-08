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

@Table({ tableName: 'location' })
export class Location extends Model<Location> {
  @AutoIncrement
  @Column({
    primaryKey: true,
    allowNull: false,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    type: DataType.FLOAT, // Change to FLOAT or DECIMAL
    allowNull: false,
  })
  longs: number; // Update to number

  @Column({
    type: DataType.FLOAT, // Change to FLOAT or DECIMAL
    allowNull: false,
  })
  lats: number; // Update to number

  @ForeignKey(() => Hospital)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  hospital_id: number;

  @BelongsTo(() => Hospital)
  hospital: Hospital;
}
