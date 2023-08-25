import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesDriverService {
  constructor(private prismaService: PrismaService) { }

  createOrUpdate(dto: { route_id: string; lat: number; lng: number }) {
    // const countRouteDriver = this.prismaService.routeDriver.count({
    //   where: {
    //     route_id: dto.route_id
    //   }
    // })

    return this.prismaService.routeDriver.upsert({ // Faz um update se o where retornar algo ou um insert se nao retornar nada
      include: {
        route: true
      },
      where: { route_id: dto.route_id },
      create: {
        route_id: dto.route_id,
        points: {
          set: { // eh uma forma que o prisma tem de adicionar o item em um array
            location: {
              lat: dto.lat,
              lng: dto.lng
            }
          }
        }
      },
      update: {
        points: {
          push: { // Ao inves do set usa push pra adicionar ao array existente
            location: {
              lat: dto.lat,
              lng: dto.lng
            }
          }
        }
      }
    })

  }

}
