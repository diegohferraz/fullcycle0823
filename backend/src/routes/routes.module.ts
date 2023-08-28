import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MapsModule } from 'src/maps/maps.module';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
import { RoutesGateway } from './routes/routes.gateway';
import { BullModule } from '@nestjs/bull';
import { NewPointsJob } from './new-points.job';

@Module({
  imports: [
    MapsModule, // Mesmo estando no app module esse aqui nao conhece o maps module
    BullModule.registerQueue(
      { name: 'new-points' }, // nome da fila
      { name: 'kafka-producer' },
    ),
  ],
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService, RoutesGateway, NewPointsJob],
})
export class RoutesModule {}
