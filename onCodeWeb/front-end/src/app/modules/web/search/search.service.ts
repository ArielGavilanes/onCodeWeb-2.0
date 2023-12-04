import { Injectable } from '@angular/core';
import { SearchCursos } from 'src/app/database/interfaces/cursos.interface';
import { SearchSystemService } from 'src/app/database/services/search-system.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private searchSystemService: SearchSystemService
  ) { }

  searchCursoByLike(searchCursos: SearchCursos) {
    return this.searchSystemService.searchCursoByLike(searchCursos);
  }
}
