import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigurationService {
  constructor(private configService: ConfigService) {}

  get port(): number {
    return Number(this.configService.get<number>('config.PORT'));
  }

  get dataBaseURI(): string {
    return this.configService.get<string>('config.DATABASE_URI') || '';
  }

  get jwtSecretKey(): string {
    return this.configService.get<string>('JWT_SECRET_KEY') || '';
  }

  get jwtExpires(): string {
    return this.configService.get<string>('JWT_EXPIRES') || '';
  }

  get configs() {
    const config = {
      PORT: this.configService.get<number>('config.PORT'),
      DATABASE_URI: this.configService.get<string>('config.DATABASE_URI'),
    };

    return config;
  }
}
