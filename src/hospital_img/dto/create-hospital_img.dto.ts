import { IsNumber, IsString } from 'class-validator';

export class CreateHospitalImgDto {
  @IsNumber()
  hospital_id: number;

  @IsString()
  img: string;
}
