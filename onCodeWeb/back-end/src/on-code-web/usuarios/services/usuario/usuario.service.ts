import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuarios } from '../../models/usuarios.model';
import { LoginUsuarioDTO } from '../../dto/usuarios.dto';
import { LoginUsuario } from '../../interfaces/usuarios.interface';

@Injectable()
export class UsuarioService {

    constructor(
        @InjectModel(Usuarios)
        private usuarios: typeof Usuarios
    ) { }

    async loginUsuarios(loginUsuarioDTO: LoginUsuarioDTO): Promise<LoginUsuario | null> {
        const { usuario, contrasena, id_rol } = loginUsuarioDTO;

        const usuarioLogin = await this.usuarios.findOne({
            where: {
                usuario,
                contrasena,
                id_rol
            },
        });
        return usuarioLogin? {id_usuario: usuarioLogin.id_usuario, usuario: usuarioLogin.usuario, contrasena: usuarioLogin.contrasena, id_rol: usuarioLogin.id_rol} : null;
    }
}
