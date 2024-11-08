"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalModule = void 0;
const common_1 = require("@nestjs/common");
const hospital_service_1 = require("./hospital.service");
const hospital_controller_1 = require("./hospital.controller");
const sequelize_1 = require("@nestjs/sequelize");
const hospital_model_1 = require("./hospital.model");
const service_model_1 = require("../service/service.model");
const location_model_1 = require("../location/location.model");
const users_module_1 = require("../users/users.module");
let HospitalModule = class HospitalModule {
};
exports.HospitalModule = HospitalModule;
exports.HospitalModule = HospitalModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([hospital_model_1.Hospital, location_model_1.Location, service_model_1.Service]), users_module_1.UsersModule],
        controllers: [hospital_controller_1.HospitalController],
        providers: [hospital_service_1.HospitalService],
    })
], HospitalModule);
//# sourceMappingURL=hospital.module.js.map