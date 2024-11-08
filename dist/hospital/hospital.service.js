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
exports.HospitalService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const hospital_model_1 = require("./hospital.model");
const service_model_1 = require("../service/service.model");
const location_model_1 = require("../location/location.model");
const hospital_img_model_1 = require("../hospital_img/hospital_img.model");
const sequelize_2 = require("sequelize");
const user_model_1 = require("../users/user.model");
let HospitalService = class HospitalService {
    constructor(hospitalModel, serviceModel) {
        this.hospitalModel = hospitalModel;
        this.serviceModel = serviceModel;
    }
    async create(createHospitalDto) {
        return this.hospitalModel.create(createHospitalDto);
    }
    async findAll() {
        return this.hospitalModel.findAll({
            include: [
                {
                    model: location_model_1.Location,
                    attributes: ['longs', 'lats'],
                },
                {
                    model: hospital_img_model_1.Hospital_img,
                    attributes: ['img'],
                },
                {
                    model: service_model_1.Service,
                    include: [
                        {
                            model: user_model_1.Users,
                            attributes: ['id'],
                        },
                    ],
                },
                {
                    model: user_model_1.Users,
                },
            ],
        });
    }
    async findOne(id) {
        const hospital = await this.hospitalModel.findByPk(id);
        if (!hospital) {
            throw new common_1.NotFoundException(`Hospital with ID ${id} not found`);
        }
        return hospital;
    }
    async update(id, updateHospitalDto) {
        const [updated] = await this.hospitalModel.update(updateHospitalDto, {
            where: { id },
        });
        if (!updated) {
            throw new common_1.NotFoundException(`Hospital with ID ${id} not found`);
        }
        return this.findOne(id);
    }
    async remove(id) {
        const deleted = await this.hospitalModel.destroy({ where: { id } });
        if (!deleted) {
            throw new common_1.NotFoundException(`Hospital with ID ${id} not found`);
        }
        return { message: 'Hospital successfully deleted' };
    }
    async searchHospitals(name) {
        console.log(name);
        const hospitals = await this.hospitalModel.findAll({
            where: {
                name: {
                    [sequelize_2.Op.like]: `${name}%`,
                },
            },
        });
        const services = await this.serviceModel.findAll({
            where: {
                name: {
                    [sequelize_2.Op.like]: `${name}%`,
                },
            },
        });
        return [...hospitals, ...services].map((obj) => {
            if (obj instanceof hospital_model_1.Hospital) {
                return {
                    id: obj.id,
                    name: obj.name,
                };
            }
            else {
                return {
                    id: obj.id,
                    name: obj.name,
                    price: obj.price,
                    doctor_id: obj.doctor_id,
                    hospital_id: obj.hospital_id,
                };
            }
        });
    }
};
exports.HospitalService = HospitalService;
exports.HospitalService = HospitalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(hospital_model_1.Hospital)),
    __param(1, (0, sequelize_1.InjectModel)(service_model_1.Service)),
    __metadata("design:paramtypes", [Object, Object])
], HospitalService);
//# sourceMappingURL=hospital.service.js.map