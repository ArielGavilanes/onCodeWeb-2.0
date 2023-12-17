import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/database/services/roles.service';
import { ResponseRoles, Roles } from 'src/app/database/interfaces/roles.interface';
import { Observable, map, retry, tap } from 'rxjs';
import { UsuarioLogin } from 'src/app/interfaces/user';
import { InsertUsuario } from 'src/app/database/interfaces/insertUsuario.interface';
import { InsertUsuarioService } from 'src/app/database/services/insert-usuario.service';
import { UsuarioCredentials } from 'src/app/database/interfaces/usuarioCredentials.interface';
import { AuthBackService } from 'src/app/database/services/auth-back.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

//Metodo para obtener roles desde rolesService
  roles: ResponseRoles = { roles: [] };

  constructor(private rolesService: RolesService, 
    private insertUsuarioService: InsertUsuarioService,
    private authBackService: AuthBackService
    ) { 
    this.getRoles()
  }

  //Metodo para obtener roles de la base de datos
  getRoles(): Observable<ResponseRoles>  {
    return this.rolesService.getRoles().pipe(
      tap(response => {
        this.roles = response;
      }),
    );
  }

  //Metodo para insertar usuarios nuevos en la base de datos
  insertUsuario(insertUsuario: InsertUsuario): Observable<InsertUsuario> {
    return this.insertUsuarioService.insertUsuario(insertUsuario)
  }

  //Metodo de autenticacion de token 
  getToken(): string | null {
    return localStorage.getItem('token')
  }

  //Metodo para validar la presencia de token
  usuarioAutenticado(): boolean {
    const token = this.getToken()
    return !!token
  }

}
  