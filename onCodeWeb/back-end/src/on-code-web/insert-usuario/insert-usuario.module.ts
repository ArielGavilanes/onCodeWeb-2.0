import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Estudiantes } from '../estudiantes/models/estudiantes.model';
import { Creadores } from '../creadores/models/creadores.model';
import { Usuarios } from '../usuarios/models/usuarios.model';
import { InsertUsuarioController } from './controllers/insert-usuario.controller';
import { InsertUsuarioService } from './services/insert-usuario.service';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Estudiantes, Creadores, Usuarios])
    ],
    controllers: [InsertUsuarioController],
    providers: [InsertUsuarioService]
})
export class InsertUsuarioModule {}
