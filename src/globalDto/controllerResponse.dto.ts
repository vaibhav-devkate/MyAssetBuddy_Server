import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ControllerResponse {
  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  data: any;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  error: any;

  @IsNotEmpty()
  statusCode: number;
}
