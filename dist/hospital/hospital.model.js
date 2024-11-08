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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hospital = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const hospital_img_model_1 = require("../hospital_img/hospital_img.model");
const location_model_1 = require("../location/location.model");
const service_model_1 = require("../service/service.model");
const user_model_1 = require("../users/user.model");
let Hospital = class Hospital extends sequelize_typescript_1.Model {
};
exports.Hospital = Hospital;
__decorate([
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Hospital.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Hospital.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => location_model_1.Location),
    __metadata("design:type", location_model_1.Location)
], Hospital.prototype, "location", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => hospital_img_model_1.Hospital_img),
    __metadata("design:type", Array)
], Hospital.prototype, "hospital_img", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => service_model_1.Service),
    __metadata("design:type", Array)
], Hospital.prototype, "services", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => user_model_1.Users),
    __metadata("design:type", user_model_1.Users)
], Hospital.prototype, "doctors", void 0);
exports.Hospital = Hospital = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'hospital' })
], Hospital);
//# sourceMappingURL=hospital.model.js.map