import { Injectable } from '@nestjs/common';
import { Cursos } from '../../models/cursos.model';
import { InjectModel } from '@nestjs/sequelize';
import { Contenido } from 'src/on-code-web/contenido/models/contenido.model';

@Injectable()
export class GetCursoService {

    // constructor (
    //     @InjectModel(Cursos)
    //     private cursosModel: typeof Cursos,
    //     @InjectModel(Contenido)
    //     private contenidoModel: typeof Contenido
    // ) {}


    // async getCurso(id_curso: number): Promise<any> {
    //     return await this.cursosModel.findByPk(id_curso)
    // }
}
