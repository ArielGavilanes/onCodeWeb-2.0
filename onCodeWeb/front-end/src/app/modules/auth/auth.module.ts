import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BackgroundRowComponent as registerBackground } from './components/register/components/background-row/background-row.component';
import { SelectRolComponent } from './components/register/components/select-rol/select-rol.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './components/login/components/login-form/login-form.component';
import { BackgroundRowComponent as loginBackground } from './components/login/components/background-row/background-row.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    registerBackground,
    SelectRolComponent,
    LoginFormComponent,
    loginBackground
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,

  ]
})
export class AuthModule { }