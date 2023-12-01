import { Module } from '@nestjs/common';
import { UsuarioService } from './services/usuario/usuario.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuarios } from './models/usuarios.model';

@Module({
    imports: [
        SequelizeModule.forFeature([Usuarios])
    ],
    exports: [
        UsuarioService
    ],
    providers: [
        UsuarioService
    ]
})
export class UsuariosModule {}
