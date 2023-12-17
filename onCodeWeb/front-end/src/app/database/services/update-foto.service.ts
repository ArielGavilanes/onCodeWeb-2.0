import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FotoDTO } from '../interfaces/updateFoto.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateFotoService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  updateFotoEstudiante(fotoDTO: FotoDTO): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/estudiante/foto`, fotoDTO);
  }

  updateFotoCreador(fotoDTO: FotoDTO): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/creador/foto`, fotoDTO);
  }

}
