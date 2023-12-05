import { Module } from '@nestjs/common';
import { UsuarioService } from './services/usuario/usuario.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuarios } from './models/usuarios.model';
import { UserInfoService } from './services/user-info/user-info.service';
import { UserInfoController } from './controllers/user-info/user-info.controller';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Usuarios])
    ],
    controllers: [UserInfoController],
    providers: [UsuarioService, UserInfoService]
})export class UsuariosModule {}
