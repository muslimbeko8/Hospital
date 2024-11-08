import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
export declare class AuthGuard implements CanActivate {
    private configService;
    constructor(configService: ConfigService);
    canActivate(context: ExecutionContext): boolean;
}
