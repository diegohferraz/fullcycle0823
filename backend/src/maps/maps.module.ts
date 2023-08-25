import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js';
import { DirectionsController } from './directions/directions.controller';
import { DirectionsService } from './directions/directions.service';

@Module({
  controllers: [PlacesController, DirectionsController],
  providers: [
    PlacesService,
    {
      provide: GoogleMapsClient, // Aqui estamos criando um servico customizado
      useValue: new GoogleMapsClient() // E passando este valor para o servico customizado
    },
    DirectionsService
  ],
  exports: [DirectionsService] //  tonra este service disponivel la par ao routes module
})
export class MapsModule { }
