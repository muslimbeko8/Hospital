import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
export declare class HospitalController {
    private readonly hospitalService;
    constructor(hospitalService: HospitalService);
    create(createHospitalDto: CreateHospitalDto): Promise<import("./hospital.model").Hospital>;
    findAll(): Promise<import("./hospital.model").Hospital[]>;
    search(name: string): Promise<({
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
    findOne(id: string): Promise<import("./hospital.model").Hospital>;
    update(id: string, updateHospitalDto: UpdateHospitalDto): Promise<import("./hospital.model").Hospital>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
