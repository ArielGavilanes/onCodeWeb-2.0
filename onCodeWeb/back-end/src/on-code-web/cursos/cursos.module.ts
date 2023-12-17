import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cursos } from './models/cursos.model';
import { GetCursoController } from './controllers/get-curso/get-curso.controller';
import { GetCursoService } from './services/get-curso/get-curso.service';
import { Contenido } from '../contenido/models/contenido.model';
import { create } from 'domain';
import { CreateCursoController } from './controllers/create-curso/create-curso.controller';
import { CreateCursoService } from './services/create-curso/create-curso.service';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Cursos, Contenido])
    ],
    controllers: [GetCursoController, CreateCursoController],
    providers: [GetCursoService, CreateCursoService]
})
export class CursosModule {}
