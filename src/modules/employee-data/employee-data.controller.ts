import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeDataService } from './employee-data.service';
import { CreateEmployeeDatumDto } from './dto/create-employee-datum.dto';
import { UpdateEmployeeDatumDto } from './dto/update-employee-datum.dto';

@Controller('employee-data')
export class EmployeeDataController {
  constructor(private readonly employeeDataService: EmployeeDataService) {}

  @Post()
  create(@Body() createEmployeeDatumDto: CreateEmployeeDatumDto) {
    return this.employeeDataService.create(createEmployeeDatumDto);
  }

  @Get()
  findAll() {
    return this.employeeDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDatumDto: UpdateEmployeeDatumDto) {
    return this.employeeDataService.update(+id, updateEmployeeDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeDataService.remove(+id);
  }
}
