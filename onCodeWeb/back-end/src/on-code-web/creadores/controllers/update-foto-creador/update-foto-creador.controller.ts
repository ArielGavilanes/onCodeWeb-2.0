import { Body, Controller, Post } from '@nestjs/common';
import { UpdateFotosCreadorService } from '../../services/update-fotos-creador/update-fotos-creador.service';
import { creadoresFotoDTO } from '../../dto/creadoresDTO.dto';

@Controller('creador')
export class UpdateFotoCreadorController {

    constructor(
        private updateFotosCreadorService: UpdateFotosCreadorService
    ) { }

    @Post('foto')
    async updateFotoCreador(@Body() creadoresFotoDTO: creadoresFotoDTO): Promise<any> {

        return this.updateFotosCreadorService.updateFotosCreador(creadoresFotoDTO)

    }
}
