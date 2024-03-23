import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuarios } from '../../models/usuarios.model';
import { LoginUsuario } from '../../interfaces/usuarios.interface';
import { AuthUsuarioDTO } from 'src/auth/dto/authLogin.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuarios)
    private usuarios: typeof Usuarios,
  ) {}

  async loginUsuarios(
    authUsuarioDTO: AuthUsuarioDTO,
  ): Promise<LoginUsuario | null> {
    const { usuario, contrasena, id_rol } = authUsuarioDTO;

    const usuarioLogin = await this.usuarios.findOne({
      where: {
        usuario: usuario,
        contrasena: contrasena,
        id_rol: id_rol,
      },
    });
    return usuarioLogin
      ? {
          id_usuario: usuarioLogin.id_usuario,
          usuario: usuarioLogin.usuario,
          contrasena: usuarioLogin.contrasena,
          id_rol: usuarioLogin.id_rol,
        }
      : null;
  }
}
