import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomInt } from 'crypto';
import { Request } from 'express';
import { Repository } from 'typeorm';
import { Url } from '../entities/url.entity';
import { UrlLog } from '../entities/urlLog.entity';

@Injectable()
export class UrlService {
	constructor(
		@InjectRepository(Url) private urlRepo: Repository<Url>,
		@InjectRepository(UrlLog) private urlLogRepo: Repository<UrlLog>
	) {}

	async shorten(path: string) {
		const key = randomInt(100000);
		await this.urlRepo.insert({
			clicked: 0,
			createdDate: new Date(),
			key: key.toString(),
			url: path
		});
		return key;
	}
	async getRedirectionUrl(key: string, req: Request) {
		const url = await this.urlRepo.findOne({
			where: {
				key: key
			}
		});
		if (!url) throw new Error('Key not found');
		await this.urlRepo.save({
			...url,
			clicked: url.clicked + 1
		});
		let ip = req.get('X-Forwarded-For');
		if (ip) ip = ip.split(',')[0];
		else ip = req.ip;
		await this.urlLogRepo.insert({
			date: new Date(),
			headers: Object.entries(req.headers)
				.map(([key, val]) => `${key}: ${val}`)
				.join('\n'),
			url: url,
			ip: ip
		});
		return url.url;
	}

	async getUrlWithLogs(key: string) {
		const url = await this.urlRepo.findOne({
			where: {
				key: key
			},
			relations: {
				urlLogs: true
			}
		});
		if (!url) throw new Error('Key not found');

		return url;
	}
}
