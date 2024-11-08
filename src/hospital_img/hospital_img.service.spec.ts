import { Test, TestingModule } from '@nestjs/testing';
import { HospitalImgService } from './hospital_img.service';

describe('HospitalImgService', () => {
  let service: HospitalImgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HospitalImgService],
    }).compile();

    service = module.get<HospitalImgService>(HospitalImgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
