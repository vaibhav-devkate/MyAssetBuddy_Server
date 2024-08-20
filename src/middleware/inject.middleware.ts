import type { INestApplication } from '@nestjs/common';

// https://docs.nestjs.com/middleware#multiple-middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const injectMiddlewares = (app: INestApplication) => {
  // reference: https://docs.nestjs.com/security/cors
};

export default injectMiddlewares;
