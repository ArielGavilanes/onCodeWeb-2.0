import { Injectable, BadRequestException } from '@nestjs/common';
import { InsertUsuarioDTO } from '../dto/insertUsuario.dto';
import { validate } from 'class-validator';
import { Usuarios } from 'src/on-code-web/usuarios/models/usuarios.model';
import { Estudiantes  } from 'src/on-code-web/estudiantes/models/estudiantes.model';
import { Creadores } from 'src/on-code-web/creadores/models/creadores.model';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class InsertUsuarioService {

    constructor(
        @InjectModel(Estudiantes)
        private estudiantes: typeof Estudiantes,
        @InjectModel(Creadores)
        private creadores: typeof Creadores,
        @InjectModel(Usuarios)
        private usuarios: typeof Usuarios
        ) { }

        async insertUsuario(insertUsuarioDTO: InsertUsuarioDTO): Promise<any> {
            const errors = await validate(insertUsuarioDTO);
        
            // Validación del DTO
            if (errors.length > 0) {
                const errorMessagesToMap = errors.map(error => Object.values(error.constraints)).flat();
                const errorMessages = errorMessagesToMap.join(', ');
                throw new BadRequestException('Validación fallida', errorMessages);
            }
        
            // Desestructuración de InsertUsuarioDTO
            const {
                usuario,
                contrasena,
                id_rol,
                id_estado,
                cedula,
                primer_nombre,
                segundo_nombre,
                primer_apellido,
                segundo_apellido,
                email,
                url_foto_perfil = 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40',
                url_foto_portada = 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40'
            } = insertUsuarioDTO;
        
            // Comienza la transacción
            const t = await this.usuarios.sequelize.transaction();
        
            try {
                // Inserta en la tabla "Usuarios"
                const usuarioResult = await this.usuarios.create({
                    usuario,
                    contrasena,
                    id_rol,
                    id_estado
                }, { transaction: t });
        
                const var_id_usuario = usuarioResult.id_usuario;
        
                // Verifica el rol y realiza el segundo insert
                if (id_rol === 1) {
                    // Inserta en la tabla "Estudiantes"
                    await this.estudiantes.create({
                        cedula,
                        primer_nombre,
                        segundo_nombre,
                        primer_apellido,
                        segundo_apellido,
                        email,
                        url_foto_perfil,
                        url_foto_portada,
                        id_usuario: var_id_usuario
                    }, { transaction: t });
                } else if (id_rol === 2) {
                    // Inserta en la tabla "Creadores"
                    await this.creadores.create({
                        cedula,
                        primer_nombre,
                        segundo_nombre,
                        primer_apellido,
                        segundo_apellido,
                        email,
                        url_foto_perfil,
                        url_foto_portada,
                        id_usuario: var_id_usuario
                    }, { transaction: t });
                }
        
                // Completa la transacción
                await t.commit();
        
                // Retorna algún resultado si es necesario
                return { success: true };
            } catch (error) {
                // Si hay un error, realiza un rollback
                await t.rollback();
                throw error;
            }
        }
}
