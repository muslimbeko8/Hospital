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
exports.ServiceHistoryController = void 0;
const common_1 = require("@nestjs/common");
const service_history_service_1 = require("./service_history.service");
const create_service_history_dto_1 = require("./dto/create-service_history.dto");
const update_service_history_dto_1 = require("./dto/update-service_history.dto");
const role_decorator_1 = require("../common/guard/role.decorator");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const role_guard_1 = require("../common/guard/role.guard");
const auth_guard_1 = require("../common/guard/auth.guard");
let ServiceHistoryController = class ServiceHistoryController {
    constructor(serviceHistoryService) {
        this.serviceHistoryService = serviceHistoryService;
    }
    create(createServiceHistoryDto) {
        return this.serviceHistoryService.create(createServiceHistoryDto);
    }
    findAll() {
        return this.serviceHistoryService.findAll();
    }
    findOne(id) {
        return this.serviceHistoryService.findOne(+id);
    }
    update(id, updateServiceHistoryDto) {
        return this.serviceHistoryService.update(+id, updateServiceHistoryDto);
    }
    remove(id) {
        return this.serviceHistoryService.remove(+id);
    }
};
exports.ServiceHistoryController = ServiceHistoryController;
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS, create_user_dto_1.UserRole.DOCTOR, create_user_dto_1.UserRole.SUPERADMIN, create_user_dto_1.UserRole.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_history_dto_1.CreateServiceHistoryDto]),
    __metadata("design:returntype", void 0)
], ServiceHistoryController.prototype, "create", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS, create_user_dto_1.UserRole.DOCTOR, create_user_dto_1.UserRole.SUPERADMIN, create_user_dto_1.UserRole.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceHistoryController.prototype, "findAll", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS, create_user_dto_1.UserRole.DOCTOR, create_user_dto_1.UserRole.SUPERADMIN, create_user_dto_1.UserRole.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceHistoryController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS, create_user_dto_1.UserRole.SUPERADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_history_dto_1.UpdateServiceHistoryDto]),
    __metadata("design:returntype", void 0)
], ServiceHistoryController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(create_user_dto_1.UserRole.ADMIN, create_user_dto_1.UserRole.BOSS, create_user_dto_1.UserRole.SUPERADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceHistoryController.prototype, "remove", null);
exports.ServiceHistoryController = ServiceHistoryController = __decorate([
    (0, common_1.Controller)('service-history'),
    __metadata("design:paramtypes", [service_history_service_1.ServiceHistoryService])
], ServiceHistoryController);
//# sourceMappingURL=service_history.controller.js.map