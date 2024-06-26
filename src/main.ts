import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './configs';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppExceptionFilter } from './common/filters/exception.filter';
import { ResponseFormatInterceptor } from './common/interceptor/response-format.interceptor';
import { ValidationPipe } from 'pipes/validation.pipe';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api-v1');
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Documentation')
    .setVersion('0.0.1')

    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
    })
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api-v1/docs', app, document, {});
  const configService = app.get(ConfigService);

  app.useGlobalFilters(new AppExceptionFilter());
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ allowedHeaders: '*', exposedHeaders: '*' });
  const appConfig = configService.get<AppConfig>('app');
  console.log('appConfig.apiPort',appConfig.apiPort)
  Logger.debug(appConfig.apiPort)
  await app.listen(appConfig.apiPort ?? 3000);
}
bootstrap();
