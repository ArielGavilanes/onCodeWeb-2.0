import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/database/services/roles.service';
import { ResponseRoles, Roles } from 'src/app/database/interfaces/roles.interface';
import { Observable, map, retry, tap } from 'rxjs';
import { UsuarioLogin } from 'src/app/interfaces/user';
import { InsertUsuario } from 'src/app/database/interfaces/insertUsuario.interface';
import { InsertUsuarioService } from 'src/app/database/services/insert-usuario.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//Inicio de login
  private loggedIn = false;

  login(user: UsuarioLogin): boolean {
    if (user.username === 'usuario' && user.password === 'contrasena') {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }


//Metodo para obtener roles desde rolesService
  roles: ResponseRoles = { roles: [] };

  constructor(private rolesService: RolesService, 
    private insertUsuarioService: InsertUsuarioService) { 
    this.getRoles()
  }

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
}
  