import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from 'src/app/database/interfaces/roles.interface';
import { UsuarioCredentials } from 'src/app/database/interfaces/usuarioCredentials.interface';
import { UsuarioLogin } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'login-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  //user y password vacio
  usuarioCredentials: UsuarioCredentials = 
  {
    usuario: '',
    contrasena: '',
    id_rol: 0
  }

  // Variable local para almacenar los roles en el componente
  roles: Roles[] = [];
  
  
  errorMessage = '';

  constructor(private authService: AuthService,
    private router: Router
    ) {}


  // login(): void {
  //   if (this.isInputValid()) {
  //     if (this.authService.login(this.user)) {
  //       console.log('Inicio de sesión');
  //     } else {
  //       this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
  //     }
  //   } else {
  //     this.errorMessage = 'Nombre de usuario y contraseña deben tener máximo 15 caracteres';
  //   }
  // }
//validacion de 15 caracteres
  private isInputValid(): boolean {
    const {
      usuario,
      contrasena
    } = this.usuarioCredentials;
    return usuario.length <= 15 && contrasena.length <= 15;
  }


  //Metodo para la validacion de credenciales en el login
  validationLogin() {
    this.authService.loginValidation(this.usuarioCredentials).subscribe (
      (res: any) => {
        console.log('Token', res.token)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard']);
      },
    (err: Error) => {
      console.log('Error', err)
    }
    )
  };


  //Metodo para traer roles desde la base de datos
  getRoles() {
    this.authService.getRoles().subscribe(
      response => {
        // Puedes acceder directamente a los roles desde response.roles
        this.roles = response.roles;
        console.log(this.roles)
      },
      err => console.log(err)
    );
  } 
}
