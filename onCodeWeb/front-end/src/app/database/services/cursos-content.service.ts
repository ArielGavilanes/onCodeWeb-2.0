import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosContentService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getCursoContent(id_curso: number) {
    return this.http.get(`${this.BASE_URL}/curso-contenido/${id_curso}`);
  }
}
