import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Contenido } from '../../models/contenido.model';
import { Cursos } from 'src/on-code-web/cursos/models/cursos.model';
import { TipoContenido } from 'src/on-code-web/tipo-contenido/models/tipo-contenido.model';

@Injectable()
export class CursoContenidoService {

    constructor (
        @InjectModel(Contenido)
        private contenidoModel: typeof Contenido,
        @InjectModel(Cursos)
        private cursosModel: typeof Cursos,
        @InjectModel(TipoContenido)
        private tipoContenidoModel: typeof TipoContenido
    ) {}

    async getCursoContenido(id_curso: number): Promise<any> {
        // Buscar el curso
        const curso = await this.cursosModel.findByPk(id_curso);
    
        // Buscar los contenidos asociados al curso
        const contenidos = await this.contenidoModel.findAll({
            where: {
                id_curso: id_curso
            }
        });
    
        // Devolver el curso y los contenidos
        return { curso, contenidos };
    }

}
