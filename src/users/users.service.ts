import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Users } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { LongInUserDto } from './dto/login_in.user.dto';
import { ConfigService } from 'src/common/config/config.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users) private readonly userModel: typeof Users,
    private readonly configService: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10);
    createUserDto.password = hashPassword;
    return this.userModel.create(createUserDto);
  }

  async findAll() {
    return this.userModel.findAll();
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const [updatedCount] = await this.userModel.update(updateUserDto, {
      where: { id },
    });

    if (updatedCount === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedCount = await this.userModel.destroy({ where: { id } });
    if (deletedCount === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return { message: 'User successfully deleted' };
  }

  async findByPhoneNumber(tel_number: string) {
    return this.userModel.findOne({ where: { tel_number } });
  }

  async login(loginUserDto: LongInUserDto) {
    const { tel_number, password } = loginUserDto;

    const user = await this.findByPhoneNumber(tel_number);
    if (!user) {
      throw new UnauthorizedException('Invalid phone number or password');
    }
    // console.log(user.dataValues);

    const isPasswordValid = await bcrypt.compare(
      password,
      user.dataValues.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid phone number or password');
    }

    const accessToken = this.generateAccessToken({
      tel_number: user.dataValues.tel_number,
    });
    const refreshToken = this.generateRefreshToken({
      tel_number: user.dataValues.tel_number,
    });

    console.log('accessToken');
    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  private generateAccessToken(data: object) {
    return jwt.sign(data, this.configService.get('JWT_ACCESS_SECRET'), {
      expiresIn: '1h',
    });
  }

  private generateRefreshToken(data: object) {
    return jwt.sign(data, this.configService.get('JWT_REFRESH_SECRET'), {
      expiresIn: '8h',
    });
  }
}
