"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user_model_1 = require("./user.model");
const sequelize_1 = require("@nestjs/sequelize");
const config_service_1 = require("../common/config/config.service");
let UsersService = class UsersService {
    constructor(userModel, configService) {
        this.userModel = userModel;
        this.configService = configService;
    }
    async create(createUserDto) {
        const hashPassword = await bcrypt.hash(createUserDto.password, 10);
        createUserDto.password = hashPassword;
        return this.userModel.create(createUserDto);
    }
    async findAll() {
        return this.userModel.findAll();
    }
    async findOne(id) {
        const user = await this.userModel.findByPk(id);
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async update(id, updateUserDto) {
        const [updatedCount] = await this.userModel.update(updateUserDto, {
            where: { id },
        });
        if (updatedCount === 0) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const deletedCount = await this.userModel.destroy({ where: { id } });
        if (deletedCount === 0) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return { message: 'User successfully deleted' };
    }
    async findByPhoneNumber(tel_number) {
        return this.userModel.findOne({ where: { tel_number } });
    }
    async login(loginUserDto) {
        const { tel_number, password } = loginUserDto;
        const user = await this.findByPhoneNumber(tel_number);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid phone number or password');
        }
        const isPasswordValid = await bcrypt.compare(password, user.dataValues.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid phone number or password');
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
    generateAccessToken(data) {
        return jwt.sign(data, this.configService.get('JWT_ACCESS_SECRET'), {
            expiresIn: '1h',
        });
    }
    generateRefreshToken(data) {
        return jwt.sign(data, this.configService.get('JWT_REFRESH_SECRET'), {
            expiresIn: '8h',
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.Users)),
    __metadata("design:paramtypes", [Object, config_service_1.ConfigService])
], UsersService);
//# sourceMappingURL=users.service.js.map