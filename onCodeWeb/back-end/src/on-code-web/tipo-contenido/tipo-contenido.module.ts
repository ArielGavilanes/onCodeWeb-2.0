import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TipoContenido } from './models/tipo-contenido.model';
import { TipoContenidoController } from './controllers/tipo-contenido/tipo-contenido.controller';
import { GetTipoContenidoService } from './services/get-tipo-contenido/get-tipo-contenido.service';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([TipoContenido])
    ],
    controllers: [TipoContenidoController],
    providers: [GetTipoContenidoService]
})
export class TipoContenidoModule {}