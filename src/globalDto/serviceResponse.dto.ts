import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class ServiceResponse {
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsOptional()
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any;

  @IsOptional()
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  error: any;
}
