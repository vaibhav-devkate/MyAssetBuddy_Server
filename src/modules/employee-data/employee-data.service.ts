import { Injectable } from '@nestjs/common';
import { CreateEmployeeDatumDto } from './dto/create-employee-datum.dto';
import { UpdateEmployeeDatumDto } from './dto/update-employee-datum.dto';

@Injectable()
export class EmployeeDataService {
  create(createEmployeeDatumDto: CreateEmployeeDatumDto) {
    return 'This action adds a new employeeDatum';
  }

  findAll() {
    return `This action returns all employeeData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeDatum`;
  }

  update(id: number, updateEmployeeDatumDto: UpdateEmployeeDatumDto) {
    return `This action updates a #${id} employeeDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeDatum`;
  }
}
