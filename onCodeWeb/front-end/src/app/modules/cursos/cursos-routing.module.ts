import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { CursoEspecificoComponent } from './components/curso-especifico/curso-especifico.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  { path: 'cursos', component: CursosComponent,
  children: [
    { path: ':id_curso', component: CursoEspecificoComponent}
  ],
  canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
