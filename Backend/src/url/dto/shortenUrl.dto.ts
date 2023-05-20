import { IsString } from 'class-validator';

export class ShortenUrlDto {
	@IsString()
	path: string;
}
