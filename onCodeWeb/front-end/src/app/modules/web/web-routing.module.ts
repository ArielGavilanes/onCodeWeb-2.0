import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarouselComponent } from './inicio/components/carousel/carousel.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', component: WebComponent,
      children: [
        { path: 'inicio', component: InicioComponent },
        { path: 'search', component: SearchComponent}
      ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
