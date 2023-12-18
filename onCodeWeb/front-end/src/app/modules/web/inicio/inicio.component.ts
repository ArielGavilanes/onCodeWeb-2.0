import { Component } from '@angular/core';
import { UserInfoService } from 'src/app/database/services/user-info.service';

@Component({
  selector: 'web-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(
    private userInfoService: UserInfoService,
  ){}

  usuario: any;
  infoUsuario: any;
  cursos: any;

  getInfo() {
    this.userInfoService.getInfo().subscribe(
      (res) => {
        console.log(res)

        this.usuario = res.usuario

        this.infoUsuario = res.usuarioInfo
        if (this.usuario.id_rol === 1) {

          this.cursos = res.usuarioInfo.Estudiantes_Cursos_Estudiantes

        } else if (this.usuario.id_rol === 2) {

          this.cursos = res.usuarioInfo.Creadores_Cursos

        }
        console.log(this.usuario, this.infoUsuario, this.cursos)
      },
      (err) => console.log('error en log', err),
    )
  }
}
