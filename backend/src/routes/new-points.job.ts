import { Job } from 'bull';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
import { Process, Processor } from '@nestjs/bull';

@Processor('new-points') //nome da fila que vai consumir
export class NewPointsJob {
  constructor(private routesDriverService: RoutesDriverService) {}

  @Process() //decorator pra informar que é esse o cara que vai processar
  async handle(job: Job<{ route_id: string; lat: number; lng: number }>) {
    // Job é fornecido pelo bull para permitir que o serviço consuma da fila
    await this.routesDriverService.createOrUpdate(job.data);
    return {};
  }
}
