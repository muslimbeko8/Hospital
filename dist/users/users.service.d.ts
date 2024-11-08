import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './user.model';
import { LongInUserDto } from './dto/login_in.user.dto';
import { ConfigService } from 'src/common/config/config.service';
export declare class UsersService {
    private readonly userModel;
    private readonly configService;
    constructor(userModel: typeof Users, configService: ConfigService);
    create(createUserDto: CreateUserDto): Promise<Users>;
    findAll(): Promise<Users[]>;
    findOne(id: number): Promise<Users>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<Users>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findByPhoneNumber(tel_number: string): Promise<Users>;
    login(loginUserDto: LongInUserDto): Promise<{
        user: Users;
        accessToken: any;
        refreshToken: any;
    }>;
    private generateAccessToken;
    private generateRefreshToken;
}
