import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';
import { InitialDB1685139137099 } from '../../migrations/1685139137099-InitialDB';
import { Url } from '../url/url.entity';

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

export interface EnvConfig {
	port: number;
	db: DataSourceOptions;
}

export const loadConfig = () => ({
	port: parseInt(process.env.PORT ?? '0', 10) || 3000,
	db: {
		host: process.env.DB_HOST,
		port: parseInt(process.env.DB_PORT),
		database: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		type: process.env.DB_TYPE,
		entities: [Url],
		migrations: [InitialDB1685139137099]
	} as DataSourceOptions
});

@Injectable()
export class EnvConfigService implements EnvConfig {
	constructor(private configService: ConfigService) {}

	public get port() {
		return this.configService.getOrThrow<number>('port');
	}
	public get db() {
		return this.configService.getOrThrow<DataSourceOptions>('db');
	}
}
