import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursoHeaderComponent } from './components/components/curso-header/curso-header.component';
import { ContentComponent } from './components/components/content/content.component';
import { CursosComponent } from './cursos/cursos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CursoEspecificoComponent } from './components/curso-especifico/curso-especifico.component';


@NgModule({
  declarations: [
    CursoHeaderComponent,
    ContentComponent,
    CursosComponent,
    CursoEspecificoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ]
})
export class CursosModule { }
