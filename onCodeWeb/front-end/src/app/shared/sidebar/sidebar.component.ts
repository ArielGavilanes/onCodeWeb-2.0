import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/app/database/services/user-info.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuario: any;
  infoUsuario: any
  cursos: any

  constructor(
    private userInfoService: UserInfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo()
  }

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

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}

