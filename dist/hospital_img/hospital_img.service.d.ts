import { CreateHospitalImgDto } from './dto/create-hospital_img.dto';
import { UpdateHospitalImgDto } from './dto/update-hospital_img.dto';
import { Hospital_img } from './hospital_img.model';
export declare class HospitalImgService {
    private readonly hospitalImgModel;
    constructor(hospitalImgModel: typeof Hospital_img);
    create(createHospitalImgDto: CreateHospitalImgDto): Promise<Hospital_img>;
    findAll(): Promise<Hospital_img[]>;
    findOne(id: number): Promise<Hospital_img>;
    update(id: number, updateHospitalImgDto: UpdateHospitalImgDto): Promise<Hospital_img>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
