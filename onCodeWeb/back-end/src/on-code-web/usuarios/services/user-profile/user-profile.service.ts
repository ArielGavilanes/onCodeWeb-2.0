import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Usuarios } from '../../models/usuarios.model';
import { Creadores } from 'src/on-code-web/creadores/models/creadores.model';
import { Estudiantes } from 'src/on-code-web/estudiantes/models/estudiantes.model';
import { Cursos_Estudiantes } from 'src/on-code-web/cursos_estudiantes/models/cursos_estudiantes.model';
import { MetodosPago } from 'src/on-code-web/metodos-pago/models/metodos-pago.model';
import { Cursos } from 'src/on-code-web/cursos/models/cursos.model';

@Injectable()
export class UserProfileService {
    constructor (
        @InjectModel(Usuarios)
        private usuariosModel: typeof Usuarios,
        @InjectModel(Creadores)
        private creadoresModel: typeof Creadores,
        @InjectModel(Estudiantes)
        private estudiantesModel: typeof Estudiantes,
        ) {}

    async findUserInfoById(id_usuario: number, id_rol: number): Promise<any> {
        const usuario = await this.usuariosModel.findByPk(id_usuario)
        let usuarioInfo
        if (id_rol === 1) {
            usuarioInfo = await this.creadoresModel.findOne({ 
                where: { id_usuario: id_usuario }
            })
        }
        if (id_rol === 2) {
            usuarioInfo = await this.estudiantesModel.findOne({ 
                where: { id_usuario: id_usuario }
            })
        }
        return {usuario, usuarioInfo}
    }
}