"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceHistoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_service_history_dto_1 = require("./create-service_history.dto");
class UpdateServiceHistoryDto extends (0, mapped_types_1.PartialType)(create_service_history_dto_1.CreateServiceHistoryDto) {
}
exports.UpdateServiceHistoryDto = UpdateServiceHistoryDto;
//# sourceMappingURL=update-service_history.dto.js.map