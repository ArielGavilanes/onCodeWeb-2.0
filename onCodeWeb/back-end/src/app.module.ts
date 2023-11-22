import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

@Module({
  imports: [CursosModule,
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
      models: [Cursos, Usuarios]
    }),
    //Connection for the second database onCodeBank
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1229tqmj',
      database: 'onCodeBank',
      autoLoadModels: true,
      synchronize: true,
      name: 'baseTransaccional' 
    }),
    RolesModule,
    UsuariosModule,
    EstudiantesModule,
    CreadoresModule,
    CategoriasModule,
    EstadosModule,
    TipoContenidoModule,
    ContenidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
