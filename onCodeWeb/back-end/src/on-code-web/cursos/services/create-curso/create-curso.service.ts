import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Cursos as CursosModel} from '../../models/cursos.model';
import { CursosDTO } from '../../dto/cursos.dto';

@Injectable()
export class CreateCursoService {

    constructor(
        @InjectModel(CursosModel)
        private cursosModel: typeof CursosModel
    ) {}

    async createCurso(cursosDTO: CursosDTO): Promise<any> {
        
        // console.log('DTO nest 1', cursosDTO)
        
        const {
            nombre,
            descripcion,
            premium,
            precio,
            url_foto_portada,
            id_categoria,
            cedula
        } = cursosDTO

        const datosForCreateCurso = {
            nombre : nombre,
            descripcion : descripcion,
            premium : premium,
            precio : precio,
            url_foto_portada: url_foto_portada,
            id_categoria: id_categoria,
            cedula: cedula
        }

        console.log('DTO nest 2', datosForCreateCurso)

        return await this.cursosModel.create(datosForCreateCurso)
    }
}
