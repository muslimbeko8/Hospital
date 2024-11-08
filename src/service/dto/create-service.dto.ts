import { IsNumber, IsString } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  doctor_id: number;

  @IsNumber()
  hospital_id: number;
}
