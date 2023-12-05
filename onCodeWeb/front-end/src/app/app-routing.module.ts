import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { WebModule } from './modules/web/web.module';

const routes: Routes = [
  {path:'',redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule,
  WebModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
