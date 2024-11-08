import { Test, TestingModule } from '@nestjs/testing';
import { HospitalImgController } from './hospital_img.controller';
import { HospitalImgService } from './hospital_img.service';

describe('HospitalImgController', () => {
  let controller: HospitalImgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HospitalImgController],
      providers: [HospitalImgService],
    }).compile();

    controller = module.get<HospitalImgController>(HospitalImgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
