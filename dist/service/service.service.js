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
exports.ServiceService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const service_model_1 = require("./service.model");
const user_model_1 = require("../users/user.model");
let ServiceService = class ServiceService {
    constructor(serviceModel) {
        this.serviceModel = serviceModel;
    }
    async create(createServiceDto) {
        return this.serviceModel.create(createServiceDto);
    }
    async findAll() {
        return this.serviceModel.findAll({
            include: {
                model: user_model_1.Users,
            },
        });
    }
    async findOne(id) {
        const service = await this.serviceModel.findByPk(id);
        if (!service) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
        return service;
    }
    async update(id, updateServiceDto) {
        const updated = await this.serviceModel.update(updateServiceDto, {
            where: { id },
        });
        if (!updated) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const deleted = await this.serviceModel.destroy({ where: { id } });
        if (!deleted) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
        return { message: 'Service successfully deleted' };
    }
};
exports.ServiceService = ServiceService;
exports.ServiceService = ServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(service_model_1.Service)),
    __metadata("design:paramtypes", [Object])
], ServiceService);
//# sourceMappingURL=service.service.js.map