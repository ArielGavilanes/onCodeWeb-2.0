import { Body, Controller, Post } from '@nestjs/common';
import { ContenidoService } from '../../services/contenido/contenido.service';
import { ContenidoDTO } from '../../dto/contenido.dto';

@Controller('contenido')
export class ContenidoController {

    constructor(
        private contenidoService: ContenidoService
    ){}

    @Post('')
    async crearContenido(@Body() contenidoDTO: ContenidoDTO): Promise <any> {
        console.log('DTO', contenidoDTO)
        return this.contenidoService.createContenido(contenidoDTO)
    }
}
