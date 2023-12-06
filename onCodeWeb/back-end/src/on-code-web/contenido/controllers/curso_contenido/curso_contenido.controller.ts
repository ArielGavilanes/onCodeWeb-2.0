import { Controller, Get, Param } from '@nestjs/common';
import { CursoContenidoService } from '../../services/curso_contenido/curso_contenido.service';

@Controller('curso-contenido')
export class CursoContenidoController {

    constructor (
        private cursoContenidoService: CursoContenidoService
    ) {}

    @Get(':id_curso')
    async getCursoContenido(@Param('id_curso') id_curso): Promise<any> {
        this.cursoContenidoService.getCursoContenido(id_curso)
    }
}
