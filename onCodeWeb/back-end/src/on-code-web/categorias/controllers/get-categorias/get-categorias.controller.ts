import { Controller, Get } from '@nestjs/common';
import { GetCategoriasService } from '../../services/get-categorias/get-categorias.service';
import { Categorias } from '../../interfaces/categorias.interface';

@Controller('categorias')
export class GetCategoriasController {

    constructor(
        private getCategoriasService: GetCategoriasService
    ){}

    @Get('')
    async getCategorias(): Promise<Categorias[]> {
        return await this.getCategoriasService.getCategorias()
    }
}

