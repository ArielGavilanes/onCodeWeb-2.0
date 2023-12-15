import { Module } from '@nestjs/common';
import { CursoContenidoService } from './services/curso_contenido/curso_contenido.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cursos } from '../cursos/models/cursos.model';
import { Contenido } from './models/contenido.model';
import { TipoContenido } from '../tipo-contenido/models/tipo-contenido.model';
import { CursoContenidoController } from './controllers/curso_contenido/curso_contenido.controller';
import { Creadores } from '../creadores/models/creadores.model';
import { ContenidoController } from './controllers/contenido/contenido.controller';
import { ContenidoService } from './services/contenido/contenido.service';

@Module({
  imports: [
    SequelizeModule.forFeature
      ([Cursos, Contenido, TipoContenido, Creadores])
  ],
  controllers: [CursoContenidoController, ContenidoController],
  providers: [CursoContenidoService, ContenidoService]
})
export class ContenidoModule {

}
