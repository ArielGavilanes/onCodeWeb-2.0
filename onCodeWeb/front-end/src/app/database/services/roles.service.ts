import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roles } from '../interfaces/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  BASE_URL: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }
  
  getRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${this.BASE_URL}/roles`)
  }
}
