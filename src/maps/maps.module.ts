import { Module } from '@nestjs/common';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js';

@Module({
  controllers: [PlacesController],
  providers: [
    PlacesService,
    {
      provide: GoogleMapsClient, // Aqui estamos criando um servico customizado
      useValue: new GoogleMapsClient() // E passando este valor para o servico customizado
    }
  ]
})
export class MapsModule { }
