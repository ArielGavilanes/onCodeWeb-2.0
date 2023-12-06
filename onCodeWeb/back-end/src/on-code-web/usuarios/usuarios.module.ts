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

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Usuarios, Estudiantes, Creadores])
    ],
    controllers: [UserProfileController],
    providers: [UsuarioService, UserProfileService],
    exports: [UsuarioService]
})export class UsuariosModule {}
