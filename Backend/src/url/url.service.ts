import { Injectable } from '@nestjs/common';
import { Url } from './url.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UrlService {
  constructor(@InjectRepository(Url) private repo: Repository<Url>) {}

  async shorten(sourcePath: string, destinationUrl: string) {
    const item = await this.repo.findOne({
      where: {
        sourcePath: sourcePath,
        destinationUrl: destinationUrl,
      },
    });
    if (item) return;
    await this.repo.insert({
      clicked: 0,
      createdDate: new Date(),
      destinationUrl: destinationUrl,
      sourcePath: sourcePath,
    });
  }
  async getRedirectionUrl(sourceId: string) {
    const item = await this.repo.findOne({
      where: {
        sourcePath: sourceId,
      },
    });
    if (!item) return 'www.google.com';
    return item.destinationUrl;
  }
}
