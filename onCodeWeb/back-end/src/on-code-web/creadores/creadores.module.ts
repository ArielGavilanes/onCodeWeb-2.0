import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Creadores } from './models/creadores.model';
import { UpdateFotoCreadorController } from './controllers/update-foto-creador/update-foto-creador.controller';
import { UpdateFotosCreadorService } from './services/update-fotos-creador/update-fotos-creador.service';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Creadores])
    ],
    controllers: [UpdateFotoCreadorController],
    providers: [UpdateFotosCreadorService]
})
export class CreadoresModule {

}
