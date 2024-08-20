import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDataController } from './employee-data.controller';
import { EmployeeDataService } from './employee-data.service';

describe('EmployeeDataController', () => {
  let controller: EmployeeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeDataController],
      providers: [EmployeeDataService],
    }).compile();

    controller = module.get<EmployeeDataController>(EmployeeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
