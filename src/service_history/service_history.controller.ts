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
import { ServiceHistoryService } from './service_history.service';
import { CreateServiceHistoryDto } from './dto/create-service_history.dto';
import { UpdateServiceHistoryDto } from './dto/update-service_history.dto';
import { Roles } from 'src/common/guard/role.decorator';
import { UserRole } from 'src/users/dto/create-user.dto';
import { RolesGuard } from 'src/common/guard/role.guard';
import { AuthGuard } from 'src/common/guard/auth.guard';

@Controller('service-history')
export class ServiceHistoryController {
  constructor(private readonly serviceHistoryService: ServiceHistoryService) {}

  @Roles(
    UserRole.ADMIN,
    UserRole.BOSS,
    UserRole.DOCTOR,
    UserRole.SUPERADMIN,
    UserRole.USER,
  )
  @UseGuards(AuthGuard, RolesGuard)
  @Post()
  create(@Body() createServiceHistoryDto: CreateServiceHistoryDto) {
    return this.serviceHistoryService.create(createServiceHistoryDto);
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
    return this.serviceHistoryService.findAll();
  }

  @Roles(
    UserRole.ADMIN,
    UserRole.BOSS,
    UserRole.DOCTOR,
    UserRole.SUPERADMIN,
    UserRole.USER,
  )
  @UseGuards(AuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceHistoryService.findOne(+id);
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS, UserRole.SUPERADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateServiceHistoryDto: UpdateServiceHistoryDto,
  ) {
    return this.serviceHistoryService.update(+id, updateServiceHistoryDto);
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS, UserRole.SUPERADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceHistoryService.remove(+id);
  }
}
