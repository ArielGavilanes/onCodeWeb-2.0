import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from '../interfaces/categorias.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categorias[]> {
    return this.http.get<Categorias[]>(`${this.BASE_URL}/categorias`)
  }
}
