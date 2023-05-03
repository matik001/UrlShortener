import { IsString } from 'class-validator';

export class ShortenUrlDto {
  @IsString()
  sourcePath: string;
  @IsString()
  destinationUrl: string;
}
