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
exports.ServiceHistoryService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const service_history_model_1 = require("./service_history.model");
let ServiceHistoryService = class ServiceHistoryService {
    constructor(serviceHistoryModel) {
        this.serviceHistoryModel = serviceHistoryModel;
    }
    async create(createServiceHistoryDto) {
        return this.serviceHistoryModel.create(createServiceHistoryDto);
    }
    async findAll() {
        return this.serviceHistoryModel.findAll();
    }
    async findOne(id) {
        const serviceHistory = await this.serviceHistoryModel.findByPk(id);
        if (!serviceHistory) {
            throw new common_1.NotFoundException(`Service history with ID ${id} not found`);
        }
        return serviceHistory;
    }
    async update(id, updateServiceHistoryDto) {
        const [updated] = await this.serviceHistoryModel.update(updateServiceHistoryDto, {
            where: { id },
        });
        if (!updated) {
            throw new common_1.NotFoundException(`Service history with ID ${id} not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const deleted = await this.serviceHistoryModel.destroy({ where: { id } });
        if (!deleted) {
            throw new common_1.NotFoundException(`Service history with ID ${id} not found`);
        }
        return { message: 'Service history successfully deleted' };
    }
};
exports.ServiceHistoryService = ServiceHistoryService;
exports.ServiceHistoryService = ServiceHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(service_history_model_1.Service_history)),
    __metadata("design:paramtypes", [Object])
], ServiceHistoryService);
//# sourceMappingURL=service_history.service.js.map