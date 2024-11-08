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
exports.HospitalImgController = void 0;
const common_1 = require("@nestjs/common");
const hospital_img_service_1 = require("./hospital_img.service");
const multer_1 = require("multer");
const update_hospital_img_dto_1 = require("./dto/update-hospital_img.dto");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const auth_guard_1 = require("../common/guard/auth.guard");
const role_guard_1 = require("../common/guard/role.guard");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const role_decorator_1 = require("../common/guard/role.decorator");
const storage = (0, multer_1.diskStorage)({
    destination: './uploads',
    filename: (req, file, callback) => {
        const ixtiyoriy = Date.now() + '-' + Math.round(Math.random() * 10000);
        const ext = (0, path_1.extname)(file.originalname);
        callback(null, file.fieldname + '-' + ixtiyoriy + ext);
    },
});
let HospitalImgController = class HospitalImgController {
    constructor(hospitalImgService) {
        this.hospitalImgService = hospitalImgService;
    }
    async uploadFile(file, hospitalId) {
        console.log('upload file', file);
        if (!file) {
            throw new common_1.BadRequestException('yoq');
        }
        const hospitalImgDto = {
            hospital_id: hospitalId,
            img: file.filename,
        };
        const savedImage = await this.hospitalImgService.create(hospitalImgDto);
        return savedImage;
    }
    findAll() {
        return this.hospitalImgService.findAll();
    }
    findOne(id) {
        return this.hospitalImgService.findOne(+id);
    }
    update(id, updateHospitalImgDto) {
        return this.hospitalImgService.update(+id, updateHospitalImgDto);
    }
    remove(id) {
        return this.hospitalImgService.remove(+id);
    }
};
exports.HospitalImgController = HospitalImgController;
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', { storage })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('hospital_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], HospitalImgController.prototype, "uploadFile", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HospitalImgController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalImgController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_hospital_img_dto_1.UpdateHospitalImgDto]),
    __metadata("design:returntype", void 0)
], HospitalImgController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalImgController.prototype, "remove", null);
exports.HospitalImgController = HospitalImgController = __decorate([
    (0, common_1.Controller)('hospital-img'),
    __metadata("design:paramtypes", [hospital_img_service_1.HospitalImgService])
], HospitalImgController);
//# sourceMappingURL=hospital_img.controller.js.map