import { Injectable } from '@nestjs/common';
import { EnvConfigService } from './EnvConfig.service';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Url } from 'src/url/url.entity';

@Injectable()
export class TypeormConfigService implements TypeOrmOptionsFactory {
	constructor(private envConfigService: EnvConfigService) {}
	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: this.envConfigService.db.type,
			host: this.envConfigService.db.host,
			port: this.envConfigService.db.port,
			username: this.envConfigService.db.user,
			password: this.envConfigService.db.pass,
			database: this.envConfigService.db.name,
			entities: [Url],
			synchronize: true
		};
	}
}
