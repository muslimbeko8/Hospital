import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('Kalit berilmagan');
    }

    try {
      const result = jwt.verify(
        token,
        this.configService.get('JWT_ACCESS_SECRET'),
      );
      request.user = result;
      return true;
    } catch (err) {
      throw new ForbiddenException('Kalit eskirgan yoki notogri');
    }
  }
}
