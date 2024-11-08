import { HospitalImgService } from './hospital_img.service';
import { UpdateHospitalImgDto } from './dto/update-hospital_img.dto';
export declare class HospitalImgController {
    private readonly hospitalImgService;
    constructor(hospitalImgService: HospitalImgService);
    uploadFile(file: any, hospitalId: number): Promise<import("./hospital_img.model").Hospital_img>;
    findAll(): Promise<import("./hospital_img.model").Hospital_img[]>;
    findOne(id: string): Promise<import("./hospital_img.model").Hospital_img>;
    update(id: string, updateHospitalImgDto: UpdateHospitalImgDto): Promise<import("./hospital_img.model").Hospital_img>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
