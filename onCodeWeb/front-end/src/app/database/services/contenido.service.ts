import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contenido } from '../interfaces/contenido.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  crearContenido(contenido: Contenido): Observable<any> {
    console.log('servicio general', contenido)
    return this.http.post<any>(`${this.BASE_URL}/contenido`, contenido)
  } 
}