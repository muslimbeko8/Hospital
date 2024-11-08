import {  
  Table,  
  Model,  
  Column,  
  DataType,  
  AutoIncrement,  
  AllowNull,  
  BelongsTo,  
  ForeignKey,  
} from 'sequelize-typescript';  
import { Users } from '../users/user.model';   
import { Service } from '../service/service.model';  
import { Hospital } from '../hospital/hospital.model';  

@Table({ tableName: 'service_history' })  
export class Service_history extends Model<Service_history> {  
  @AutoIncrement  
  @Column({  
    primaryKey: true,  
    allowNull: false,  
    type: DataType.INTEGER,  
  })  
  id: number;  

  @AllowNull(false)  
  @ForeignKey(() => Users)   
  @Column({  
    type: DataType.INTEGER,  
  })  
  user_id: number;  

  @AllowNull(false)  
  @ForeignKey(() => Service)  
  @Column({  
    type: DataType.INTEGER,  
  })  
  service_id: number;  

  @AllowNull(false)  
  @Column({  
    type: DataType.ENUM('cash', 'credit_card', 'debit_card'), 
  })  
  payment_type: string;  

  @AllowNull(false)  
  @Column({  
    type: DataType.FLOAT,  
  })  
  payment_amount: number;  

  @AllowNull(false)  
  @Column({  
    type: DataType.DATE,
  })  
  date: Date;  

  @AllowNull(false)  
  @Column({  
    type: DataType.TEXT,  
  })  
  feedback: string;  

  @AllowNull(false)  
  @Column({  
    type: DataType.INTEGER,  
  })  
  rating: number;  

  @ForeignKey(() => Hospital)  
  @AllowNull(false)  
  @Column({  
    type: DataType.INTEGER,  
  })  
  hospital_id: number;  

  @BelongsTo(() => Users)   
  user: Users;  

  @BelongsTo(() => Service)  
  service: Service;  

  @BelongsTo(() => Hospital)  
  hospital: Hospital;  
}