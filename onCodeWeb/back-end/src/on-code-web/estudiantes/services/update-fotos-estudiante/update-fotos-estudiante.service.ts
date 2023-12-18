import { Injectable } from '@nestjs/common';
import { Estudiantes as EstudiantesModel} from '../../models/estudiantes.model';
import { InjectModel } from '@nestjs/sequelize';
import { EstudiantesFotoDTO } from '../../dto/estudiantes.dto';

@Injectable()
export class UpdateFotosEstudianteService {
    constructor(
        @InjectModel(EstudiantesModel)
        private readonly estudiantesModel: typeof EstudiantesModel
    ) {
    }

    //Metodo para actualizar fotos de portada y de perfil
    async updateFotosCreador(estudiantesFotoDTO: EstudiantesFotoDTO): Promise<any> {
        const {
            cedulaDTO,
            url_foto_perfilDTO,
            url_foto_portadaDTO
        } = estudiantesFotoDTO;

        const fotosData = {
            url_foto_perfil: url_foto_perfilDTO,
            url_foto_portada: url_foto_portadaDTO
        }

        return await this.estudiantesModel.update(fotosData, {
                where: {
                    cedula: cedulaDTO
                }
            }
        )
    }
}