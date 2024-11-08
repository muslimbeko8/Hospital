import { Model } from 'sequelize-typescript';
import { Hospital } from 'src/hospital/hospital.model';
import { Users } from 'src/users/user.model';
export declare class Service extends Model<Service> {
    id: number;
    name: string;
    price: number;
    doctor_id: number;
    doctor: Users;
    hospital_id: number;
    hospital: Hospital;
}
