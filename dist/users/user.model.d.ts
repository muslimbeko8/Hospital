import { Model } from 'sequelize-typescript';
import { Hospital } from 'src/hospital/hospital.model';
import { Service } from 'src/service/service.model';
export declare class Users extends Model<Users> {
    id: number;
    first_name: string;
    last_name: string;
    tel_number: string;
    password: string;
    birth: Date;
    role: 'admin' | 'user' | 'superAdmin' | 'doctor' | 'boss';
    profile_photo: string;
    hospital_id: number;
    hospital: Hospital;
    Service: Service[];
}
