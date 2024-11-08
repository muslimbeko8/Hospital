import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Hospital } from './hospital.model';
import { Service } from 'src/service/service.model';
export declare class HospitalService {
    private readonly hospitalModel;
    private readonly serviceModel;
    constructor(hospitalModel: typeof Hospital, serviceModel: typeof Service);
    create(createHospitalDto: CreateHospitalDto): Promise<Hospital>;
    findAll(): Promise<Hospital[]>;
    findOne(id: number): Promise<Hospital>;
    update(id: number, updateHospitalDto: UpdateHospitalDto): Promise<Hospital>;
    remove(id: number): Promise<{
        message: string;
    }>;
    searchHospitals(name: string): Promise<({
        id: number;
        name: string;
        price?: undefined;
        doctor_id?: undefined;
        hospital_id?: undefined;
    } | {
        id: number;
        name: string;
        price: number;
        doctor_id: number;
        hospital_id: number;
    })[]>;
}
