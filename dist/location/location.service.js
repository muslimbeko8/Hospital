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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const location_model_1 = require("./location.model");
let LocationService = class LocationService {
    constructor(locationModel) {
        this.locationModel = locationModel;
    }
    async create(createLocationDto) {
        return this.locationModel.create(createLocationDto);
    }
    async findAll() {
        return this.locationModel.findAll();
    }
    async findOne(id) {
        const location = await this.locationModel.findByPk(id);
        if (!location) {
            throw new common_1.NotFoundException(`Location with ID ${id} not found`);
        }
        return location;
    }
    async update(id, updateLocationDto) {
        const [updated] = await this.locationModel.update(updateLocationDto, {
            where: { id },
        });
        if (!updated) {
            throw new common_1.NotFoundException(`Location with ID ${id} not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const deleted = await this.locationModel.destroy({ where: { id } });
        if (!deleted) {
            throw new common_1.NotFoundException(`Location with ID ${id} not found`);
        }
        return { message: 'Location successfully deleted' };
    }
};
exports.LocationService = LocationService;
exports.LocationService = LocationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(location_model_1.Location)),
    __metadata("design:paramtypes", [Object])
], LocationService);
//# sourceMappingURL=location.service.js.map