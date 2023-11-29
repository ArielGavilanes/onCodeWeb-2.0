import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseRoles, Roles } from '../interfaces/roles.interface';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }
  
  getRoles(): Observable<ResponseRoles> {
    return this.http.get<ResponseRoles>(`${this.BASE_URL}/roles`);
  }
}