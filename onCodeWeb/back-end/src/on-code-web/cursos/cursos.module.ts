import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cursos } from './models/cursos.model';
import { GetCursoController } from './controllers/get-curso/get-curso.controller';
import { GetCursoService } from './services/get-curso/get-curso.service';
import { Contenido } from '../contenido/models/contenido.model';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Cursos, Contenido])
    ],
    controllers: [GetCursoController],
    providers: [GetCursoService]
})
export class CursosModule {}
