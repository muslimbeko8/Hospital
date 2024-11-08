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
exports.HospitalImgService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const hospital_img_model_1 = require("./hospital_img.model");
let HospitalImgService = class HospitalImgService {
    constructor(hospitalImgModel) {
        this.hospitalImgModel = hospitalImgModel;
    }
    async create(createHospitalImgDto) {
        return this.hospitalImgModel.create(createHospitalImgDto);
    }
    async findAll() {
        return this.hospitalImgModel.findAll();
    }
    async findOne(id) {
        const hospitalImg = await this.hospitalImgModel.findByPk(id);
        if (!hospitalImg) {
            throw new common_1.NotFoundException(`Hospital image with ID ${id} not found`);
        }
        return hospitalImg;
    }
    async update(id, updateHospitalImgDto) {
        const [updated] = await this.hospitalImgModel.update(updateHospitalImgDto, {
            where: { id },
        });
        if (!updated) {
            throw new common_1.NotFoundException(`Hospital image with ID ${id} not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const deleted = await this.hospitalImgModel.destroy({ where: { id } });
        if (!deleted) {
            throw new common_1.NotFoundException(`Hospital image with ID ${id} not found`);
        }
        return { message: 'Hospital image successfully deleted' };
    }
};
exports.HospitalImgService = HospitalImgService;
exports.HospitalImgService = HospitalImgService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(hospital_img_model_1.Hospital_img)),
    __metadata("design:paramtypes", [Object])
], HospitalImgService);
//# sourceMappingURL=hospital_img.service.js.map