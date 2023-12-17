import { Body, Controller, Post } from '@nestjs/common';
import { UpdateFotosEstudianteService } from '../../services/update-fotos-estudiante/update-fotos-estudiante.service';
import { EstudiantesFotoDTO } from '../../dto/estudiantes.dto';

@Controller('estudiante')
export class UpdateFotosEstudianteController {
    constructor(
        private updateFotosEstudianteService: UpdateFotosEstudianteService
    ) { }

    @Post('foto')
    async updateFotoCreador(@Body() estudiantesFotoDTO: EstudiantesFotoDTO): Promise<any> {

        return this.updateFotosEstudianteService.updateFotosCreador(estudiantesFotoDTO)
    }
}