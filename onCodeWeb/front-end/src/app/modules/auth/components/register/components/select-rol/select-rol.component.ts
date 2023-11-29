import { Component, OnInit } from '@angular/core';
import { InsertUsuario } from 'src/app/database/interfaces/insertUsuario.interface';
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

  ngOnInit(): void {
    this.getRoles()
  }

  getRoles() {
    this.roles = this.authService.roles
    console.log(this.roles)
  }
}
