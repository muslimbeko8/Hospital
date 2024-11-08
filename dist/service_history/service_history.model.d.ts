import { Model } from 'sequelize-typescript';
import { Users } from '../users/user.model';
import { Service } from '../service/service.model';
import { Hospital } from '../hospital/hospital.model';
export declare class Service_history extends Model<Service_history> {
    id: number;
    user_id: number;
    service_id: number;
    payment_type: string;
    payment_amount: number;
    date: Date;
    feedback: string;
    rating: number;
    hospital_id: number;
    user: Users;
    service: Service;
    hospital: Hospital;
}
