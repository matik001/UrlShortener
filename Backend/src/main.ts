import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { EnvConfigService } from './config/EnvConfig.service';
import { log } from 'console';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle('Super shortener')
		.setDescription('This is api for SuperShortener')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs/api', app, document);

	// app.enableCors();
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true
		})
	);
	const configService = app.get(EnvConfigService);
	await app.listen(configService.port, () => {
		console.log('Server started!');
	});
}
bootstrap();
