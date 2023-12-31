import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RoutesModule } from './routes/routes.module';
import { ConfigModule } from '@nestjs/config';
import { MapsModule } from './maps/maps.module';
import { BullModule } from '@nestjs/bull';

// Um modulo eh uma classe que tem este decorator @module ES7 Decorators
// Este decorator vai registrar o que tem disponivel a minha alicacao
@Module({
  //Imports posso importar outros modulos
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Isso que disponibiliza variaveis de ambiente no projeto
    PrismaModule,
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
      },
    }),
    RoutesModule,
    MapsModule,
  ],
  //Controlers sao quem habilitam as rodas para receber as requisicoes http
  controllers: [AppController],
  //Camada de servico onde eh recomendado ter as camadas de negocio
  providers: [AppService],
})
export class AppModule {}
