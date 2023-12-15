import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoContenido } from '../interfaces/tipo-contenido.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoContenidoService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getTipoContenido():Observable<TipoContenido[]> {
    return this.http.get<TipoContenido[]>(`${this.BASE_URL}/tipo-contenido`)
  } 
}
