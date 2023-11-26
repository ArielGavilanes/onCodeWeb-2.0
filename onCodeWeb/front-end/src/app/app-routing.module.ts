import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { LoginComponent } from './modules/auth/components/login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'iniciar-sesion',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
