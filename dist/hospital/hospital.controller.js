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
exports.HospitalController = void 0;
const common_1 = require("@nestjs/common");
const hospital_service_1 = require("./hospital.service");
const create_hospital_dto_1 = require("./dto/create-hospital.dto");
const update_hospital_dto_1 = require("./dto/update-hospital.dto");
const role_decorator_1 = require("../common/guard/role.decorator");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const auth_guard_1 = require("../common/guard/auth.guard");
const role_guard_1 = require("../common/guard/role.guard");
let HospitalController = class HospitalController {
    constructor(hospitalService) {
        this.hospitalService = hospitalService;
    }
    create(createHospitalDto) {
        return this.hospitalService.create(createHospitalDto);
    }
    findAll() {
        return this.hospitalService.findAll();
    }
    async search(name) {
        return this.hospitalService.searchHospitals(name);
    }
    findOne(id) {
        return this.hospitalService.findOne(+id);
    }
    update(id, updateHospitalDto) {
        return this.hospitalService.update(+id, updateHospitalDto);
    }
    remove(id) {
        return this.hospitalService.remove(+id);
    }
};
exports.HospitalController = HospitalController;
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_hospital_dto_1.CreateHospitalDto]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HospitalController.prototype, "search", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)('/one/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hospital_dto_1.UpdateHospitalDto]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalController.prototype, "remove", null);
exports.HospitalController = HospitalController = __decorate([
    (0, common_1.Controller)('hospital'),
    __metadata("design:paramtypes", [hospital_service_1.HospitalService])
], HospitalController);
//# sourceMappingURL=hospital.controller.js.map