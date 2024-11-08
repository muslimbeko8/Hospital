import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    create(createLocationDto: CreateLocationDto): Promise<import("./location.model").Location>;
    findAll(): Promise<import("./location.model").Location[]>;
    findOne(id: string): Promise<import("./location.model").Location>;
    update(id: string, updateLocationDto: UpdateLocationDto): Promise<import("./location.model").Location>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
