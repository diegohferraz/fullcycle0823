import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // o OnModule init vai ser executado quando este modulo for carregado no start da aplicacao
  async onModuleInit() {
    //o await aqui vai fazer o init da aplicacao esperar pela conexao no banco de dados para continuar
    await this.$connect();
  }
}
