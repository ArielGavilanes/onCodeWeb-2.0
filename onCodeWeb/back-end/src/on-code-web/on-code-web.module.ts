import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesModule } from './roles/roles.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { CreadoresModule } from './creadores/creadores.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EstadosModule } from './estados/estados.module';
import { TipoContenidoModule } from './tipo-contenido/tipo-contenido.module';
import { Cursos } from './cursos/models/cursos.model';
import { Usuarios } from './usuarios/models/usuarios.model';
import { ContenidoModule } from './contenido/contenido.module';
import { MetodosPagoModule } from './metodos-pago/metodos-pago.module';
import { DetalleTransaccionesModule } from './detalle-transacciones/detalle-transacciones.module';
import { TransaccionesModule } from './transacciones/transacciones.module';
import { Roles } from './roles/models/roles.model';
import { Estudiantes } from './estudiantes/models/estudiantes.model';
import { Creadores } from './creadores/models/creadores.model';
import { Categorias } from './categorias/models/categorias.model';
import { Estados } from './estados/models/estados.model';
import { TipoContenido } from './tipo-contenido/models/tipo-contenido.model';
import { Contenido } from './contenido/models/contenido.model';
import { MetodosPago } from './metodos-pago/models/metodos-pago.model';
import { DetalleTransacciones } from './detalle-transacciones/models/detalle-transacciones.model';
import { Transacciones } from './transacciones/models/transacciones.model';
import { InsertUsuarioModule } from './functions/insert-usuario/insert-usuario.module';
import { SearchSystemModule } from './functions/search-system/search-system.module';
import { CursosEstudiantesModule } from './cursos_estudiantes/cursos_estudiantes.module';

const models = [
    Roles,
    Usuarios,
    Estudiantes,
    Creadores,
    Categorias,
    Estados,
    TipoContenido,
    Contenido,
    Cursos,
    MetodosPago,
    DetalleTransacciones,
    Transacciones
];

@Module({
    imports: [
        //Connection for the first database onCodeWeb
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1229tqmj',
            database: 'onCodeWeb',
            autoLoadModels: true,
            synchronize: true,
            models: models
        }),
        RolesModule,
        UsuariosModule,
        EstudiantesModule,
        CreadoresModule,
        CategoriasModule,
        EstadosModule,
        TipoContenidoModule,
        ContenidoModule,
        CursosModule,
        MetodosPagoModule,
        DetalleTransaccionesModule,
        TransaccionesModule,
        InsertUsuarioModule,
        SearchSystemModule,
        CursosEstudiantesModule
    ]
})
export class OnCodeWebModule { }


