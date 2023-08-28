import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';
//import { RoutesDriverService } from '../routes-driver/routes-driver.service';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

//Funciona como um injectable
@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RoutesGateway {
  //constructor(private routesDriverService: RoutesDriverService) {}

  constructor(@InjectQueue('new-points') private newPointsQueue: Queue) {} //recebe a instancia dda fila

  @SubscribeMessage('new-points')
  async handleMessage(
    client: Socket,
    payload: { route_id: string; lat: number; lng: number },
  ) {
    client.broadcast.emit('admin-new-points', payload); // vai fazer um broadcast pra todos com esta mensagem
    client.broadcast.emit(`new-points/${payload.route_id}`, payload);
    await this.newPointsQueue.add(payload); // adiciona na fila do redis
    //await this.routesDriverService.createOrUpdate(payload); // Aqui poderiamos ir atualizando os dados no banco
    //Mas em um cenario com muitos usuarios isso seria um problema de escalabilidade
    // pra viabilizar isso, usa o kafka
  }
}
