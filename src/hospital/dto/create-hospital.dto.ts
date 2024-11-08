import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateHospitalDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
