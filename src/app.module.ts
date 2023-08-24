import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

// Um modulo eh uma classe que tem este decorator @module ES7 Decorators
// Este decorator vai registrar o que tem disponivel a minha alicacao
@Module({
  //Imports posso importar outros modulos
  imports: [PrismaModule],
  //Controlers sao quem habilitam as rodas para receber as requisicoes http
  controllers: [AppController],
  //Camada de servico onde eh recomendado ter as camadas de negocio
  providers: [AppService],
})
export class AppModule {}
