import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeDatumDto } from './create-employee-datum.dto';

export class UpdateEmployeeDatumDto extends PartialType(CreateEmployeeDatumDto) {}
