import { CreateServiceHistoryDto } from './dto/create-service_history.dto';
import { UpdateServiceHistoryDto } from './dto/update-service_history.dto';
import { Service_history } from './service_history.model';
export declare class ServiceHistoryService {
    private readonly serviceHistoryModel;
    constructor(serviceHistoryModel: typeof Service_history);
    create(createServiceHistoryDto: CreateServiceHistoryDto): Promise<Service_history>;
    findAll(): Promise<Service_history[]>;
    findOne(id: number): Promise<Service_history>;
    update(id: number, updateServiceHistoryDto: UpdateServiceHistoryDto): Promise<Service_history>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
