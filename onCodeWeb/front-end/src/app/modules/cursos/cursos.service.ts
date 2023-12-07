import { Injectable } from '@angular/core';
import { CursosContentService } from 'src/app/database/services/cursos-content.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private cursosContentService: CursosContentService
  ) { }

  getCursoContent(id_curso: number) {
    return this.cursosContentService.getCursoContent(id_curso);
  }
}
