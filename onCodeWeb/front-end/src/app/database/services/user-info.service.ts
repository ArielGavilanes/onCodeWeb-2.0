import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  BASE_URL: string = 'http://localhost:4000';
  constructor(
    private http: HttpClient
  ) { }

  decodeToken(token:string) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

// ...


  getInfo(): Observable<any> {
    const token = localStorage.getItem('token')
    console.log('token traido del local storage', token)

    if (token) {
      const decodedToken = this.decodeToken(token);
        console.log('Token decodificado:', decodedToken);
    } else {
        console.log('No se encontró token en el almacenamiento local');
    }

    const headers = { Authorization: `Bearer ${token}` }
    console.log('headers', headers)
    return this.http.get<any>(`${this.BASE_URL}/user-profile/profile`, { headers: headers })
  }
}
