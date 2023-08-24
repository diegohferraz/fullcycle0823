import { Client } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {
  constructor(
    private googleMapsClient: Client,
    private configService: ConfigService,
  ) { }

  async findPlace(text: string) {
    const { data } = await this.googleMapsClient.findPlaceFromText({
      fields: ['place_id', 'formatted_address', 'geometry', 'name'],
      key: this.configService.get<string>('GOOGLE_MAPS_API_KEY'),
      input: text,
    })

    return data
  }
}
