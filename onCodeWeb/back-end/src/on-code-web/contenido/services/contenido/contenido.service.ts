import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Contenido as ContenidoModel} from '../../models/contenido.model';
import { ContenidoDTO } from '../../dto/contenido.dto';

@Injectable()
export class ContenidoService {

    constructor(
        @InjectModel(ContenidoModel)
        private contenidoModel: typeof ContenidoModel
    ){}

    async createContenido(contenidoDTO: ContenidoDTO): Promise<any> {
        
        // console.log('en servicio nest1', contenidoDTO)
        const {
            contenido,
            id_tipo_contenido,
            id_curso
        } = contenidoDTO
        
        // console.log('desestructuracion', contenido, id_tipo_contenido, id_curso)

        const datosForContenido = {
            contenido: contenido,
            id_tipo_contenido: id_tipo_contenido,
            id_curso: id_curso
        }

        
        
        // console.log('en servicio nest',datosForContenido)
        return await this.contenidoModel.create(datosForContenido);
    }
}
