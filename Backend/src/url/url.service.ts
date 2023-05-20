import { Injectable } from '@nestjs/common';
import { Url } from './url.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { randomInt } from 'crypto';

@Injectable()
export class UrlService {
	constructor(@InjectRepository(Url) private repo: Repository<Url>) {}

	async shorten(path: string) {
		// const item = await this.repo.findOne({
		// 	where: {
		// 		url: path
		// 	}
		// });
		// if (item) return;
		const key = randomInt(100000);
		await this.repo.insert({
			clicked: 0,
			createdDate: new Date(),
			key: key.toString(),
			url: path
		});
		return key;
	}
	async getRedirectionUrl(key: string) {
		const item = await this.repo.findOne({
			where: {
				key: key
			}
		});
		if (!item) throw new Error('Key not found');
		await this.repo.save({
			...item,
			clicked: item.clicked + 1
		});
		return item.url;
	}
}
