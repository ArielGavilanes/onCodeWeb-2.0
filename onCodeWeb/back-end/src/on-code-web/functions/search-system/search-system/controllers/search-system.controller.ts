import { Controller, Get, Query, Res } from '@nestjs/common';
import { SearchSystemService } from '../services/search-system.service';
import { Cursos } from 'src/on-code-web/cursos/interfaces/cursos.interface';
import { SearchSystemDTO } from '../dto/search-system.dto';

@Controller('search')
export class SearchSystemController {

    constructor(
        private readonly searchSystemService: SearchSystemService
    ) {}

    @Get('')
    async getCursosByLike(@Query('') searchSystemDTO : SearchSystemDTO): Promise<Cursos[]> {
        return await this.searchSystemService.searchCourseByName(searchSystemDTO)
    }
}
