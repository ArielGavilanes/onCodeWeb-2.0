import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { InicioComponent } from './inicio/inicio.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: WebComponent, 
  children: [
    { path: 'inicio', component: InicioComponent },
    { path: 'search', component: SearchComponent },
  ],
  canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }