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
//Inicio de login
  // private loggedIn = false;

  // login(user: UsuarioLogin): boolean {
  //   if (user.username === 'usuario' && user.password === 'contrasena') {
  //     this.loggedIn = true;
  //     return true;
  //   }
  //   return false;
  // }

  // logout(): void {
  //   this.loggedIn = false;
  // }

  // isLoggedIn(): boolean {
  //   return this.loggedIn;
  // }


//Metodo para obtener roles desde rolesService
  roles: ResponseRoles = { roles: [] };

  constructor(private rolesService: RolesService, 
    private insertUsuarioService: InsertUsuarioService,
    private authBackService: AuthBackService
    ) { 
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


  //Metodo para la validacion de credenciales en login
  loginValidation(usuarioCredentials: UsuarioCredentials): Observable<{token: string}> {
    return this.authBackService.loginValidation(usuarioCredentials)
  
  }


  //Servicio de cookies(en veremos)
  // setTokenInCookie(token: string) {
  //   // Establece el token en una cookie con una fecha de expiración
  //   this.cookieService.set('token', token, new Date(Date.now() + 2 * 60 * 60 * 1000)); // Caduca en 2 horas
  // }

  // getTokenFromCookie(): string | undefined {
  //   // Obtiene el token almacenado en la cookie
  //   return this.cookieService.get('token');
  // }

  // logout() {
  //   // Elimina la cookie al cerrar sesión
  //   this.cookieService.delete('token');
  // }
}
  