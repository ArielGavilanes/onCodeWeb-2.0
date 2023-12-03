import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from './web/web.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarouselComponent } from './inicio/components/carousel/carousel.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    // path: '', component: WebComponent,
    // children: [
    //   { path:'dashboard', component:InicioComponent,
    //   children: [
    //     { path: 'inicio', component:CarouselComponent},
    //     { path: 'buscar', component:SearchComponent}
    //   ]
    // }
    // ]
    path: 'inicio', component: WebComponent,
  },
  // { path:'', redirectTo: '/dashboard', pathMatch:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
