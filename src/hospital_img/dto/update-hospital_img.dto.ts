import { PartialType } from '@nestjs/mapped-types';
import { CreateHospitalImgDto } from './create-hospital_img.dto';

export class UpdateHospitalImgDto extends PartialType(CreateHospitalImgDto) {}
