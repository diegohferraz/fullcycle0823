import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Global() // Isso vai evitar de eu ter que importar este modulo em todo lugar, ja que vai ficar disponivel globalmente
@Module({
  providers: [PrismaService],
  exports: [PrismaService] // Isso vai permitir que esta service seja usada em outros modulos
})
export class PrismaModule { }
