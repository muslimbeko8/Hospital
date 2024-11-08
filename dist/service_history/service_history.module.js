"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const service_history_service_1 = require("./service_history.service");
const service_history_controller_1 = require("./service_history.controller");
const sequelize_1 = require("@nestjs/sequelize");
const service_history_model_1 = require("./service_history.model");
const users_module_1 = require("../users/users.module");
let ServiceHistoryModule = class ServiceHistoryModule {
};
exports.ServiceHistoryModule = ServiceHistoryModule;
exports.ServiceHistoryModule = ServiceHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([service_history_model_1.Service_history]), users_module_1.UsersModule],
        controllers: [service_history_controller_1.ServiceHistoryController],
        providers: [service_history_service_1.ServiceHistoryService],
    })
], ServiceHistoryModule);
//# sourceMappingURL=service_history.module.js.map