import { IsInt, IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';

export class CreateServiceHistoryDto {
  @IsInt()
  @IsNotEmpty()
  user_id: number;

  @IsInt()
  @IsNotEmpty()
  service_id: number;

  @IsString()
  @IsNotEmpty()
  payment_type: string;

  @IsNumber()
  @IsNotEmpty()
  payment_amount: number;

  @IsDate()
  @IsNotEmpty()
  data: Date;

  @IsString()
  @IsNotEmpty()
  feedback: string;

  @IsNumber()
  @IsNotEmpty()
  rating: number;
}
