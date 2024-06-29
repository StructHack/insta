import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors(
  //   {
  //     origin: (origin, callback) => {
  //       const allowedOrigins = ['http://localhost:5173'];
  //       if (allowedOrigins.includes(origin)) {
  //         callback(null, true);
  //       } else {
  //         callback(new Error('Not allowed by CORS'));
  //       }
  //     },
  //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //     credentials: true,
  //   }
  //   )
  const config = new DocumentBuilder()
    .setTitle("Insta clone app")
    .setDescription("Detailed insta clone")
    .setVersion("1.0")
    .addTag("instagram")
    .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api',app, document);

  await app.listen(3000);
}
bootstrap();
