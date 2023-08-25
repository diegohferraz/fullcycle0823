// DTOs recebem os dados de uma requisicao e transformam em um objeto
// DTO - Data Transfer Object
export class CreateRouteDto {
  name: string;
  source_id: string;
  destination_id: string;
}
