import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvConfigModule } from './config/EnvConfig.module';
import { loadConfig } from './config/EnvConfig.service';
import { TypeormConfigService } from './config/TypeormConfig.service';
import { UrlModule } from './url/url.module';

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
