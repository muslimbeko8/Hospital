import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsDate,
  IsOptional,
} from 'class-validator';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  BOSS = 'boss',
  DOCTOR = 'doctor',
  SUPERADMIN = 'superAdmin',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  tel_number: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsDate()
  @IsNotEmpty()
  @IsOptional()
  birth: Date;

  @IsEnum(UserRole)
  @IsOptional()
  role: UserRole; // Hospital ID optional bo'lishi mumkin

  @IsOptional()
  @IsString()
  profile_photo?: string;

  @IsOptional()
  hospital_id?: number; // Hospital ID optional bo'lishi mumkin
}
