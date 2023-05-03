import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UrlService } from './url.service';
import { ShortenUrlDto } from './dto/shortenUrl.dto';
import { Response } from 'express';

@Controller('url')
export class UrlController {
  constructor(private urlService: UrlService) {}

  @Post('shorten')
  async shorten(@Body() body: ShortenUrlDto) {
    console.log(body);
    await this.urlService.shorten(body.sourcePath, body.destinationUrl);
    return {
      url: body.sourcePath,
    };
  }

  @Get('short/:fromId')
  async short(@Param('fromId') fromId: string) {
    const redirectionUrl = await this.urlService.getRedirectionUrl(fromId);
    return {
      redirectionUrl: redirectionUrl,
    };
  }
}
