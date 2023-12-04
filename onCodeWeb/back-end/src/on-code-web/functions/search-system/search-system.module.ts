import { Module } from '@nestjs/common';
import { SearchSystemService } from './search-system/services/search-system.service';
import { SearchSystemController } from './search-system/controllers/search-system.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cursos } from 'src/on-code-web/cursos/models/cursos.model';

@Module({
    imports: [
        SequelizeModule.forFeature
            ([Cursos])
    ],
    providers: [SearchSystemService],
    controllers: [SearchSystemController]
})
export class SearchSystemModule { }
