import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Roles } from 'src/common/guard/role.decorator';
import { UserRole } from 'src/users/dto/create-user.dto';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { RolesGuard } from 'src/common/guard/role.guard';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @Roles(
    UserRole.ADMIN,
    UserRole.BOSS,
    UserRole.DOCTOR,
    UserRole.SUPERADMIN,
    UserRole.USER,
  )
  @UseGuards(AuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
