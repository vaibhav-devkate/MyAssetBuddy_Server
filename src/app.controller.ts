import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('health')
export class AppController {
  @Get()
  healthCheck(
    @Res()
    res: Response,
  ) {
    return res.status(HttpStatus.OK).send({
      status: true,
      statusCode: 200,
      data: { message: 'Looks Good 👍' },
      error: null,
    });
  }
}
