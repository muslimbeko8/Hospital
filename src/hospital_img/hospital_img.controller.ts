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
import { HospitalImgService } from './hospital_img.service';
import { CreateHospitalImgDto } from './dto/create-hospital_img.dto';
import { diskStorage } from 'multer';
import { UpdateHospitalImgDto } from './dto/update-hospital_img.dto';
import { extname } from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/common/guard/auth.guard';
import { RolesGuard } from 'src/common/guard/role.guard';
import { UserRole } from 'src/users/dto/create-user.dto';
import { Roles } from 'src/common/guard/role.decorator';

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, callback) => {
    const ixtiyoriy = Date.now() + '-' + Math.round(Math.random() * 10000);
    const ext = extname(file.originalname);
    callback(null, file.fieldname + '-' + ixtiyoriy + ext);
  },
});

@Controller('hospital-img')
export class HospitalImgController {
  constructor(private readonly hospitalImgService: HospitalImgService) {}

  // @Post()
  // create(@Body() createHospitalImgDto: CreateHospitalImgDto) {
  //   return this.hospitalImgService.create(createHospitalImgDto);
  // }

  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file', { storage }))
  // uploadFile(@UploadedFile() file) {
  //   console.log('upload file', file);
  // }

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { storage }))
  async uploadFile(
    @UploadedFile() file,
    @Body('hospital_id') hospitalId: number,
  ) {
    console.log('upload file', file);

    if (!file) {
      throw new BadRequestException('yoq');
    }

    const hospitalImgDto: CreateHospitalImgDto = {
      hospital_id: hospitalId,
      img: file.filename,
    };
    const savedImage = await this.hospitalImgService.create(hospitalImgDto);
    
    return savedImage;
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Get()
  findAll() {
    return this.hospitalImgService.findAll();
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hospitalImgService.findOne(+id);
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHospitalImgDto: UpdateHospitalImgDto,
  ) {
    return this.hospitalImgService.update(+id, updateHospitalImgDto);
  }

  @Roles(UserRole.ADMIN, UserRole.BOSS)
  @UseGuards(AuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hospitalImgService.remove(+id);
  }
}
