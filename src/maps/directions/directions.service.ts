import { Client, DirectionsRequest, TravelMode } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DirectionsService {
  constructor(
    private googleMapsClient: Client,
    private configService: ConfigService,
  ) { }

  async getDirections(placeIdOrigin: string, placeDestinationId: string) {
    const requestParams: DirectionsRequest['params'] = {
      origin: `place_id:${placeIdOrigin}`,
      destination: `place_id:${placeDestinationId}`,
      mode: TravelMode.driving,
      key: this.configService.get<string>('GOOGLE_MAPS_API_KEY')
    }

    const { data } = await this.googleMapsClient.directions({ params: requestParams })

    return {
      ...data,
      request: {
        origin: {
          place_id: requestParams.origin,
          location: {
            lat: data.routes[0].legs[0].start_location.lat,
            lng: data.routes[0].legs[0].start_location.lng
          }
        },
        destination: {
          place_id: requestParams.destination,
          location: {
            lat: data.routes[0].legs[0].end_location.lat,
            lng: data.routes[0].legs[0].end_location.lng
          }
        },
        mode: requestParams.mode
      }
    }


  }
}
