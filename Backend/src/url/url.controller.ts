import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { ShortenUrlDto } from './dto/shortenUrl.dto';
import { Request, Response } from 'express';

@Controller('url')
export class UrlController {
	constructor(private urlService: UrlService) {}

	@Post('shorten')
	async shorten(@Req() req: Request, @Body() body: ShortenUrlDto) {
		const key = await this.urlService.shorten(body.path);
		const newUrl = `${req.protocol}://${req.get('Host')}/url/short/${key}`;
		return {
			newUrl: newUrl
		};
	}

	@Get('/short/:key')
	async short(@Param('key') key: string, @Res() res: Response) {
		const redirectionUrl = await this.urlService.getRedirectionUrl(key);
		return res.redirect(redirectionUrl);
	}
}
