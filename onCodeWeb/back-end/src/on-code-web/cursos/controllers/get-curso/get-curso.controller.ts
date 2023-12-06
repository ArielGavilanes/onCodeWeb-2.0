import { Controller, Param, Get } from '@nestjs/common';
import { GetCursoService } from '../../services/get-curso/get-curso.service';

@Controller('cursos')
export class GetCursoController {

    // constructor(
    //     private getCursoService: GetCursoService
    // ) {}

    // @Get('/:id_curso')
    // async getCurso(@Param('id_curso') id_curso: number): Promise<any> {
    //     return this.getCursoService.getCurso(id_curso)
    // }
}
