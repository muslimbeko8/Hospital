import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LongInUserDto } from './dto/login_in.user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    uploadFile(file: any, createUserDto: CreateUserDto): Promise<import("./user.model").Users>;
    findAll(): Promise<import("./user.model").Users[]>;
    findOne(id: string): Promise<import("./user.model").Users>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./user.model").Users>;
    remove(id: string): Promise<{
        message: string;
    }>;
    login(longInUserDto: LongInUserDto): Promise<{
        user: import("./user.model").Users;
        accessToken: any;
        refreshToken: any;
    }>;
}
