import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioCredentials } from '../interfaces/usuarioCredentials.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthBackService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  loginValidation(usuarioCredentials: UsuarioCredentials) : Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this.BASE_URL}/auth/login`, usuarioCredentials)
  }
}
