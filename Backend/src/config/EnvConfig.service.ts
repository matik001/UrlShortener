import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      DB_HOST: string;
      DB_PORT: string;
      DB_TYPE: string;
      DB_USER: string;
      DB_PASS: string;
      DB_NAME: string;
    }
  }
}

export interface EnvDBConfig {
  host: string;
  port: number;
  type: 'mysql' | 'mariadb' | 'postgres' | 'cockroachdb' | 'sqlite' | 'mssql';
  user: string;
  pass: string;
  name: string;
}
export interface EnvConfig {
  port: number;
  db: EnvDBConfig;
}

export const loadConfig = () => ({
  port: parseInt(process.env.PORT ?? '0', 10) || 3000,
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    name: process.env.DB_NAME,
    pass: process.env.DB_PASS,
    type: process.env.DB_TYPE,
    user: process.env.DB_USER,
  } as EnvDBConfig,
});

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {}

  public get port() {
    return this.configService.getOrThrow<number>('port');
  }
  public get db() {
    return this.configService.getOrThrow<EnvDBConfig>('db');
  }
}
