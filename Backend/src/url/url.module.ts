import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlController } from './controllers/url.controller';
import { Url } from './entities/url.entity';
import { UrlLog } from './entities/urlLog.entity';
import { UrlService } from './services/url.service';

@Module({
	imports: [TypeOrmModule.forFeature([Url, UrlLog])],
	providers: [UrlService],
	controllers: [UrlController]
})
export class UrlModule {}
