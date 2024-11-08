import { IsString, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

export class LongInUserDto {
  @IsString()
  @IsNotEmpty()
  tel_number: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
