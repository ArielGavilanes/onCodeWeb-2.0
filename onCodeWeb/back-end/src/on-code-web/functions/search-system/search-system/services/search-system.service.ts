import { Injectable } from '@nestjs/common';
import { SearchSystemDTO } from '../dto/search-system.dto';
import { Cursos } from 'src/on-code-web/cursos/interfaces/cursos.interface';
import { Cursos as CursosModel } from 'src/on-code-web/cursos/models/cursos.model';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

@Injectable()
export class SearchSystemService {

    constructor(
        @InjectModel(CursosModel)
        private readonly cursosModel: typeof CursosModel
    ) 
    {}
    async searchCourseByName(searchSystemDTO: SearchSystemDTO): Promise <Cursos[]> {
        const searchWord = searchSystemDTO.nombre_curso
        return await this.cursosModel.findAll({
            where: {
                nombre : {
                    [Op.like]: `%${searchWord}%` 
                }
            }
        });
    };
};
