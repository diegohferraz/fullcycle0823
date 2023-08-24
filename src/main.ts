// Arquivo de entrypoint inicial da aplicacao
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Cria a instancia da aplicacao nest, passando o module principal
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
