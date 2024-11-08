import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServiceController {
    private readonly serviceService;
    constructor(serviceService: ServiceService);
    create(createServiceDto: CreateServiceDto): Promise<import("./service.model").Service>;
    findAll(): Promise<import("./service.model").Service[]>;
    findOne(id: string): Promise<import("./service.model").Service>;
    update(id: string, updateServiceDto: UpdateServiceDto): Promise<import("./service.model").Service>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
