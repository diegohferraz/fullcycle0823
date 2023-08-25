import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controller tem que ter este decorator
//Se quiser um prefixo para todas as rotas deste controller, posso passar como variavel do @controller
@Controller()
export class AppController {
  //Nao existe nenhum lugar que passa o appService para o controller
  //Isso eh feito por meio de injecao de dependencia la no app module
  constructor(private readonly appService: AppService) {}

  //Se eu quiser uma rota especifica passo a string dentrdo do @get(/minharota)
  @Get() //Assim que se define o verbo http que vai ser usado nesta rota
  getHello(): string {
    return this.appService.getHello();
  }
}
