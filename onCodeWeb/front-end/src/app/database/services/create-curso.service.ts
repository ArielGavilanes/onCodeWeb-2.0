import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos } from '../interfaces/cursos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateCursoService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  createCurso(cursos: Cursos): Observable<any> {
    return this.http.post(`${this.BASE_URL}/curso/create`, cursos);
  }
}

