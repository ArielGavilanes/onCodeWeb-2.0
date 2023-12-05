import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';
import { Creadores } from 'src/on-code-web/creadores/models/creadores.model';
import { Estudiantes } from 'src/on-code-web/estudiantes/models/estudiantes.model';
import { Usuarios } from 'src/on-code-web/usuarios/models/usuarios.model';

@Injectable()
export class UserInfoService {
    constructor(
        @InjectModel(Usuarios) private readonly usuariosModel: typeof Usuarios,
        @InjectModel(Creadores) private readonly creadoresModel: typeof Creadores,
        @InjectModel(Estudiantes) private readonly estudiantesModel: typeof Estudiantes,
        private jwtService: JwtService,
    ) { }

    async getUserInfoFromToken(token: string): Promise<any> {
        const id_usuario = this.obtenerIdUsuarioDesdeToken(token);

        if (!id_usuario) {
            // Manejar el caso donde no se pudo obtener el id_usuario del token
            return null;
        }

        return this.getUserInfo(id_usuario);
    }

    private obtenerIdUsuarioDesdeToken(token: string): number | null {
        try {
            const { sub } = this.jwtService.verify(token);
            return sub;
        } catch (error) {
            console.error('Error al verificar el token:', error.message);
            return null;
        }
    }

    private async getUserInfo(idUsuario: number): Promise<any> {
        const usuario = await this.usuariosModel.findByPk(idUsuario);

        if (!usuario) {
            return null; // Manejar el caso donde no se encuentra el usuario
        }

        const { id_rol } = usuario;

        // Evaluar el rol y realizar consultas específicas
        if (id_rol === 1) {
            // Rol 1: Estudiante
            return this.getEstudianteInfo(idUsuario);
        } else if (id_rol === 2) {
            // Rol 2: Creador
            return this.getCreadorInfo(idUsuario);
        }

        return null; // Manejar el caso donde el rol no es reconocido
    }

    private async getEstudianteInfo(idUsuario: number): Promise<any> {
        const estudiante = await this.estudiantesModel.findOne({
            where: { id_usuario: idUsuario },
            include: [{ all: true }],
        });

        return estudiante;
    }

    private async getCreadorInfo(idUsuario: number): Promise<any> {
        const creador = await this.creadoresModel.findOne({
            where: { id_usuario: idUsuario },
            include: [{ all: true }],
        });

        return creador;
    }
}
