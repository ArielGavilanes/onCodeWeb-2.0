import { Controller, Get } from '@nestjs/common';
import { GetTipoContenidoService } from '../../services/get-tipo-contenido/get-tipo-contenido.service';
import { TipoContenido } from '../../interfaces/tipo-contenido.interface';

@Controller('tipo-contenido')
export class TipoContenidoController {
  constructor(private getTipoContenidoService: GetTipoContenidoService) {}

  @Get('')
  async getTipoContenido(): Promise<TipoContenido[]> {
    return this.getTipoContenidoService.getTipoContenido();
  }
}
