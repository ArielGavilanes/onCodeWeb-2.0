import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { WebModule } from './modules/web/web.module';
import { CursosModule } from './modules/cursos/cursos.module';
import { ProfileModule } from './modules/profile/profile.module';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule,
  WebModule,
  CursosModule,
  ProfileModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
