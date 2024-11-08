import { Model } from 'sequelize-typescript';
import { Hospital } from 'src/hospital/hospital.model';
export declare class Hospital_img extends Model<Hospital_img> {
    id: number;
    hospital_id: number;
    hospital: Hospital;
    img: string;
}
