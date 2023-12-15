import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/database/services/user-info.service';

@Component({
  selector: 'profile-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent implements OnInit{
  constructor(
    private userInfoService: UserInfoService,
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

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
