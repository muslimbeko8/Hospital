import { Model } from 'sequelize-typescript';
import { Hospital } from 'src/hospital/hospital.model';
export declare class Location extends Model<Location> {
    id: number;
    longs: number;
    lats: number;
    hospital_id: number;
    hospital: Hospital;
}
