import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { UsuarioLogin } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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