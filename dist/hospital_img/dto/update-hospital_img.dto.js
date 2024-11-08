"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHospitalImgDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_hospital_img_dto_1 = require("./create-hospital_img.dto");
class UpdateHospitalImgDto extends (0, mapped_types_1.PartialType)(create_hospital_img_dto_1.CreateHospitalImgDto) {
}
exports.UpdateHospitalImgDto = UpdateHospitalImgDto;
//# sourceMappingURL=update-hospital_img.dto.js.map