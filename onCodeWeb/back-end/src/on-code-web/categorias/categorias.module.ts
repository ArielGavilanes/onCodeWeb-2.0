import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Categorias } from './models/categorias.model';
import { GetCategoriasController } from './controllers/get-categorias/get-categorias.controller';
import { GetCategoriasService } from './services/get-categorias/get-categorias.service';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Categorias])
    ],
    controllers: [GetCategoriasController],
    providers: [GetCategoriasService]
})
export class CategoriasModule {}
