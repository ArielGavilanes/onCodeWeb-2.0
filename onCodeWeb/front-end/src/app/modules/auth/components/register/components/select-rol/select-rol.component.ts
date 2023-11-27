import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/database/interfaces/roles.interface';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'register-select-rol',
  templateUrl: './select-rol.component.html',
  styleUrls: ['./select-rol.component.css']
})
export class SelectRolComponent implements OnInit {
  

    // Variable local para almacenar los roles en el componente
    roles: Roles[] = [];

    constructor(private authService: AuthService) { }
  
    ngOnInit() {
      this.getRoles();
    }
  
    // Método para obtener los roles
    getRoles() {
      this.authService.getRoles().subscribe(
        response => {
          // Puedes acceder directamente a los roles desde response.roles
          this.roles = response.roles;
          console.log(this.roles)
        },
        err => console.log(err)
      );
    } 
  }


