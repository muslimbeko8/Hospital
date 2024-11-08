import { Model } from 'sequelize-typescript';
import { Hospital_img } from 'src/hospital_img/hospital_img.model';
import { Location } from 'src/location/location.model';
import { Service } from 'src/service/service.model';
import { Users } from 'src/users/user.model';
export declare class Hospital extends Model<Hospital> {
    id: number;
    name: string;
    location: Location;
    hospital_img: Hospital_img[];
    services: Service[];
    doctors: Users;
}
