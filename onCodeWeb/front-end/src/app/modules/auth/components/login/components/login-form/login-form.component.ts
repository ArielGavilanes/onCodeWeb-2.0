import { Component } from '@angular/core';
import { UsuarioLogin } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'login-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  //user y password vacio
  user: UsuarioLogin = { username: '', password: '' };
  errorMessage = '';

  constructor(private authService: AuthService) {}

  login(): void {
    if (this.isInputValid()) {
      if (this.authService.login(this.user)) {
        console.log('Inicio de sesión');
      } else {
        this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
      }
    } else {
      this.errorMessage = 'Nombre de usuario y contraseña deben tener máximo 15 caracteres';
    }
  }
//validacion de 15 caracteres
  private isInputValid(): boolean {
    return this.user.username.length <= 15 && this.user.password.length <= 15;
  }
}
