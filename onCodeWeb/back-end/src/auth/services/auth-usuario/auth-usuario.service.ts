import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import { AuthUsuarioDTO } from 'src/auth/dto/authLogin.dto';
import { UsuarioService } from 'src/on-code-web/usuarios/services/usuario/usuario.service';

@Injectable()
export class AuthUsuarioService {

    constructor(
        private jwtService: JwtService,
        private usuariosService: UsuarioService
    ) { }

    //Utilizar el servicio Usuario para comprobar las credenciales del usuario
    async authUsuario(authUsuarioDTO: AuthUsuarioDTO): Promise<string | null> {
        const usuarioVal = await this.usuariosService.loginUsuarios(authUsuarioDTO)

        if (usuarioVal) {  
            const {
                id_usuario,
                id_rol,
                usuario,
                contrasena
            } = usuarioVal

            const payload = { sub: id_usuario, usuario: usuario, id_rol, contrasena };

            const token = await this.jwtService.signAsync(payload);

            return token;
        }

        return null
    }
}