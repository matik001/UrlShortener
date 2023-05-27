import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ShortenUrlDto } from '../dto/shortenUrl.dto';
import { UrlService } from '../services/url.service';

@Controller('url')
export class UrlController {
	constructor(private urlService: UrlService) {}

	@Post('shorten')
	async shorten(@Req() req: Request, @Body() body: ShortenUrlDto) {
		const key = await this.urlService.shorten(body.path);
		return {
			key: key
		};
	}

	@Get('short/:key')
	async short(@Param('key') key: string, @Req() req: Request, @Res() res: Response) {
		const redirectionUrl = await this.urlService.getRedirectionUrl(key, req);
		return res.redirect(redirectionUrl);
	}

	@Get('logs/:key')
	async keyLogs(@Param('key') key: string) {
		const url = await this.urlService.getUrlWithLogs(key);
		return url;
	}
}
