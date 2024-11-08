import { ServiceHistoryService } from './service_history.service';
import { CreateServiceHistoryDto } from './dto/create-service_history.dto';
import { UpdateServiceHistoryDto } from './dto/update-service_history.dto';
export declare class ServiceHistoryController {
    private readonly serviceHistoryService;
    constructor(serviceHistoryService: ServiceHistoryService);
    create(createServiceHistoryDto: CreateServiceHistoryDto): Promise<import("./service_history.model").Service_history>;
    findAll(): Promise<import("./service_history.model").Service_history[]>;
    findOne(id: string): Promise<import("./service_history.model").Service_history>;
    update(id: string, updateServiceHistoryDto: UpdateServiceHistoryDto): Promise<import("./service_history.model").Service_history>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
