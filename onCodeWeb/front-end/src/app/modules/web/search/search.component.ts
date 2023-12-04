import { Component } from '@angular/core';
import { Cursos, SearchCursos } from 'src/app/database/interfaces/cursos.interface';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  cursos: Cursos[] = []
  searchParam : SearchCursos  = {
    nombre_curso : ''
  }

  constructor (
    private searchService: SearchService
  )
  {}
  
  searchResults() {
    this.searchParam.nombre_curso = this.searchParam.nombre_curso.toLowerCase()
    this.searchService.searchCursoByLike(this.searchParam).subscribe 
    (
      res => {
      console.log(res)
      this.cursos = res
    },
      err => console.log(err)
    )
  }
}
