import { Module } from '@nestjs/common';
import { UrlModule } from './url/url.module';
import { ConfigModule } from '@nestjs/config';
import { loadConfig } from './config/EnvConfig.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfigService } from './config/TypeormConfig.service';
import { EnvConfigModule } from './config/EnvConfig.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			load: [loadConfig]
		}),
		TypeOrmModule.forRootAsync({
			imports: [EnvConfigModule],
			useClass: TypeormConfigService
		}),
		UrlModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
