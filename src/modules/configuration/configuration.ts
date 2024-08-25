import { registerAs } from '@nestjs/config';
import { EnvVariables } from './types';
export default registerAs('config', () => {
  const config: EnvVariables = {
    PORT: Number(process.env.PORT) || 3000,
    DATABASE_URI: process.env.DATABASE_URI || '',
    JWT_EXPIRES: process.env.JWT_EXPIRES || '',
    JWT_SECRET_KEY:
      process.env.JWT_SECRET_KEY || 'this is very very big secret',
  };
  return config;
});
