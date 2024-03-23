import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    contrasenaDisctinct: string = ''


    constructor(
      private authService: AuthService,
      private router: Router
      ) { }
  
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

    //Objeto de interfaz insertUsuario
    nuevoUsuario: InsertUsuario = {
      usuario: '',
      contrasena: '',
      id_rol: 0,
      id_estado: 1,
      cedula: '',
      primer_nombre: '',
      segundo_nombre: '',
      primer_apellido: '',
      segundo_apellido: '',
      email: '',
      url_foto_perfil: 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40',
      url_foto_portada: 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40'
    }

    contrasenaConfirm:string = ''

    insertUsuario() {
    if (this.nuevoUsuario.contrasena === this.contrasenaConfirm){ 
      this.nuevoUsuario.id_rol = Number(this.nuevoUsuario.id_rol);
      this.authService.insertUsuario(this.nuevoUsuario)
      .subscribe(
        (res) => {
          this.router.navigate(['/login']);

        },
        (error: Error) => {
          console.log("Error en register", error)
        }
      )
      console.log(this.nuevoUsuario)
    } else {
      console.log('Las contraseñas no coinciden')
      this.contrasenaDisctinct = 'Las contraseñas no coinciden'
    }
  }
}