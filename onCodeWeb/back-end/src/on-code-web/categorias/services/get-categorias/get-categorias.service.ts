import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Categorias as CategoriasModel } from '../../models/categorias.model';
import { Categorias } from '../../interfaces/categorias.interface';

@Injectable()
export class GetCategoriasService {

    constructor(
        @InjectModel(CategoriasModel)
        private categoriasModel: typeof CategoriasModel
    ){}

    async getCategorias(): Promise<Categorias[]> {
        return await this.categoriasModel.findAll()
    }
}
