import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthUsuarioDTO } from 'src/auth/dto/authLogin.dto';
import { UsuarioCredentials } from 'src/auth/interfaces/usuarioCredentials.interface';
import { UsuarioService } from 'src/on-code-web/usuarios/services/usuario/usuario.service';

@Injectable()
export class AuthUsuarioService {

    constructor(
        private jwtService: JwtService,
        private usuariosService: UsuarioService
    ) { }

    //Utilizar el servicio Usuario para comprobar las credenciales del usuario
    async authUsuario(authUsuarioDTO: AuthUsuarioDTO): Promise<string | null> {
        const usuario = await this.usuariosService.loginUsuarios(authUsuarioDTO)

        if (usuario) {
            const {
                id_usuario,
                id_rol
            } = usuario

            const payload = { sub: id_usuario, usuario: authUsuarioDTO.usuario, id_rol };

            const token = await this.jwtService.signAsync(payload);

            return token;
        }

        return null
    }
}
