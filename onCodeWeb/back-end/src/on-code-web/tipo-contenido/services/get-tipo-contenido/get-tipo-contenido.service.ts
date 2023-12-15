import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TipoContenido as TipoContenidoModel} from '../../models/tipo-contenido.model';
import { TipoContenido} from '../../interfaces/tipo-contenido.interface';

@Injectable()
export class GetTipoContenidoService {

    constructor(
        @InjectModel(TipoContenidoModel)
        private tipoContenidoModel: typeof TipoContenidoModel

    ) {}

    async getTipoContenido(): Promise<TipoContenido[]> {
        return await this.tipoContenidoModel.findAll();
    }
}