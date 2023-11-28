import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BackgroundRowComponent } from './components/register/components/background-row/background-row.component';
import { SelectRolComponent } from './components/register/components/select-rol/select-rol.component';
import { EnterDataComponent } from './components/register/components/enter-data/enter-data.component';
import { CreateUserComponent } from './components/register/components/create-user/create-user.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    BackgroundRowComponent,
    SelectRolComponent,
    EnterDataComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AuthModule { }
