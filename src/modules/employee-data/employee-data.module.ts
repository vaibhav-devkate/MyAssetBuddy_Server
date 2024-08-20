import { Module } from '@nestjs/common';
import { EmployeeDataService } from './employee-data.service';
import { EmployeeDataController } from './employee-data.controller';

@Module({
  controllers: [EmployeeDataController],
  providers: [EmployeeDataService],
})
export class EmployeeDataModule {}
