import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';
import { ROLES_KEY } from './role.decorator';
import { UserRole } from 'src/users/dto/create-user.dto';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      console.log(requiredRoles);
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    const dbUser = await this.userService.findByPhoneNumber(user.tel_number);
    console.log(dbUser.role);

    return requiredRoles.includes(dbUser.role as UserRole);
  }
}
