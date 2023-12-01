import { Component } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchItem: string = '';


  search() {

  }
  // buscar() {
  //   console.log(' Busqueda:', this.busqueda)
  // }
}
