import { IsNumber } from 'class-validator';

export class CreateLocationDto {
  @IsNumber()
  longs: number;

  @IsNumber()
  lats: number;

  @IsNumber()
  hospital_id: number;
}
