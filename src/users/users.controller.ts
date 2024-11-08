import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UserRole } from './dto/create-user.dto';
import { diskStorage } from 'multer';
import { UpdateUserDto } from './dto/update-user.dto';
import { LongInUserDto } from './dto/login_in.user.dto';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/common/guard/role.decorator';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { RolesGuard } from 'src/common/guard/role.guard';
import { User } from './entities/user.entity';

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, callback) => {
    const ixtiyoriy = Date.now() + '-' + Math.round(Math.random() * 10000);
    const ext = extname(file.originalname);
    callback(null, file.fieldname + '-' + ixtiyoriy + ext);
  },
});

function fileFilter(req, file, callback) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(
      new BadRequestException('Faqat rasm fayllari yuklanishi mumkin'),
      false,
    );
  }
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post('register')
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto);
  // }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file', { storage }))
  // uploadFile(@UploadedFile() file) {
  //   console.log('upload file', file);
  // }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({ destination: './uploads' }),
    }),
  )
  async uploadFile(@UploadedFile() file, @Body() createUserDto: CreateUserDto) {
    console.log('upload file', file);

    // if (!file) {
    //   throw new BadRequestException('Fayl yuklanmadi');
    // }

    // createUserDto.profile_photo = file.filename;

    const savedUser = await this.usersService.create(createUserDto);

    return savedUser;
  }

  @Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Roles(UserRole.ADMIN, UserRole.SUPERADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('login')
  login(@Body() longInUserDto: LongInUserDto) {
    return this.usersService.login(longInUserDto);
  }
}
