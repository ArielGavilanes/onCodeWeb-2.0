import { Body, Controller, Post } from '@nestjs/common';
import { CreateCursoService } from '../../services/create-curso/create-curso.service';
import { CursosDTO } from '../../dto/cursos.dto';

@Controller('curso')
export class CreateCursoController {
    
    constructor(
        private createCursoService: CreateCursoService
    ){}

    @Post('create')
    async createCurso(@Body() cursosDTO: CursosDTO): Promise<any> {
        return await this.createCursoService.createCurso(cursosDTO)
    }
}
