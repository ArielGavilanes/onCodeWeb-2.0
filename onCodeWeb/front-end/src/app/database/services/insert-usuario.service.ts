import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsertUsuario } from '../interfaces/insertUsuario.interface';

@Injectable({
  providedIn: 'root'
})
export class InsertUsuarioService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  
  insertUsuario(insertUsuario: InsertUsuario): Observable<InsertUsuario> {
    return this.http.post<InsertUsuario>(`${this.BASE_URL}/insert-usuario`, insertUsuario);
  }}
