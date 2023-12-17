import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estudiantes } from './models/estudiantes.model';
import { UpdateFotosEstudianteController } from './controllers/update-fotos-estudiante/update-fotos-estudiante.controller';
import { UpdateFotosEstudianteService } from './services/update-fotos-estudiante/update-fotos-estudiante.service';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Estudiantes])
    ],
    controllers: [UpdateFotosEstudianteController],
    providers: [UpdateFotosEstudianteService]
})
export class EstudiantesModule {}
