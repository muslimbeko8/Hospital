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
exports.Hospital_img = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const hospital_model_1 = require("../hospital/hospital.model");
let Hospital_img = class Hospital_img extends sequelize_typescript_1.Model {
};
exports.Hospital_img = Hospital_img;
__decorate([
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        allowNull: false,
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Hospital_img.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => hospital_model_1.Hospital),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Hospital_img.prototype, "hospital_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => hospital_model_1.Hospital),
    __metadata("design:type", hospital_model_1.Hospital)
], Hospital_img.prototype, "hospital", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Hospital_img.prototype, "img", void 0);
exports.Hospital_img = Hospital_img = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'hospital_img' })
], Hospital_img);
//# sourceMappingURL=hospital_img.model.js.map