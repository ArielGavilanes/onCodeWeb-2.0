import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { CarouselComponent } from './inicio/components/carousel/carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WebComponent } from './web/web.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    CarouselComponent,
    WebComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class WebModule { }
