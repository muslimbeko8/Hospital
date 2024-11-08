"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const users_module_1 = require("./users/users.module");
const shared_module_1 = require("./common/config/shared.module");
const service_module_1 = require("./service/service.module");
const location_module_1 = require("./location/location.module");
const hospital_img_module_1 = require("./hospital_img/hospital_img.module");
const service_history_module_1 = require("./service_history/service_history.module");
const hospital_module_1 = require("./hospital/hospital.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_module_1.SharedModule,
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                database: 'postgres',
                username: 'postgres',
                password: '123456',
                host: '127.0.0.1',
                port: 5432,
                autoLoadModels: true,
                synchronize: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../', 'uploads'),
                serveRoot: '/static',
            }),
            users_module_1.UsersModule,
            service_module_1.ServiceModule,
            location_module_1.LocationModule,
            hospital_img_module_1.HospitalImgModule,
            service_history_module_1.ServiceHistoryModule,
            hospital_module_1.HospitalModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map