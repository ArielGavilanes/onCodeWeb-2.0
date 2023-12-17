import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from 'src/app/database/interfaces/categorias.interface';
import { Cursos } from 'src/app/database/interfaces/cursos.interface';
import { FotoDTO } from 'src/app/database/interfaces/updateFoto.dto';
import { CategoriasService } from 'src/app/database/services/categorias.service';
import { CreateCursoService } from 'src/app/database/services/create-curso.service';
import { UpdateFotoService } from 'src/app/database/services/update-foto.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private updateFotoService: UpdateFotoService,
    private createCursoService: CreateCursoService,
    private categoriasService: CategoriasService
  ) { }

  updateFotoEstudiante(fotoDTO: FotoDTO): Observable<any> {
    return this.updateFotoService.updateFotoEstudiante(fotoDTO)
  }

  updateFotoCreador(fotoDTO: FotoDTO): Observable<any> {
    return this.updateFotoService.updateFotoCreador(fotoDTO)
  }

  createCurso(cursos: Cursos): Observable<any> {
    return this.createCursoService.createCurso(cursos)
  }

  getCategorias():Observable<Categorias[]> {
    return this.categoriasService.getCategorias()
  }
}
