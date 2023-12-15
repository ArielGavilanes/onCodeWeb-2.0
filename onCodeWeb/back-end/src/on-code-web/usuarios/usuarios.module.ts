import { Module } from '@nestjs/common';
import { UsuarioService } from './services/usuario/usuario.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuarios } from './models/usuarios.model';
import { Estudiantes } from '../estudiantes/models/estudiantes.model';
import { Creadores } from '../creadores/models/creadores.model';
import { CreadoresModule } from '../creadores/creadores.module';
import { EstadosModule } from '../estados/estados.module';
import { JwtModule } from '@nestjs/jwt';
import { UserProfileService } from './services/user-profile/user-profile.service';
import { UserProfileController } from './controllers/user-profile/user-profile.controller';
import { Cursos_Estudiantes } from '../cursos_estudiantes/models/cursos_estudiantes.model';
import { Cursos } from '../cursos/models/cursos.model';
import { Sequelize } from 'sequelize';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Usuarios, Estudiantes, Creadores, Cursos_Estudiantes, Cursos])
    ],
    controllers: [UserProfileController],
    providers: [UsuarioService, UserProfileService],
    exports: [UsuarioService]
})export class UsuariosModule {}