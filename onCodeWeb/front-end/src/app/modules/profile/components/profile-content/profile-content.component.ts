import { Component, OnInit } from '@angular/core';
import { CreateCursoService } from 'src/app/database/services/create-curso.service';
import { UserInfoService } from 'src/app/database/services/user-info.service';
import { ProfileService } from '../../profile.service';
import { Cursos } from 'src/app/database/interfaces/cursos.interface';
import { Categorias } from 'src/app/database/interfaces/categorias.interface';

@Component({
  selector: 'profile-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.css']
})
export class ProfileContentComponent implements OnInit {
  constructor(
    private userInfoService: UserInfoService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getInfo()
    this.getCategorias()
  }

  usuario: any;
  infoUsuario: any;
  cursos: any;
  categorias: Categorias[] = []

  datosForCreateCurso: Cursos = {
    nombre: '',
    descripcion: '',
    premium: true,
    precio: 0,
    url_foto_portada: '',
    id_categoria: 0,
    cedula: ''
  }

  getInfo() {
    this.userInfoService.getInfo().subscribe(
      (res) => {
        console.log(res)

        this.usuario = res.usuario

        this.infoUsuario = res.usuarioInfo

        if (this.usuario.id_rol === 1) {

          // Supongamos que res.usuarioInfo.Estudiantes_Cursos_Estudiantes es tu array
          const estudiantesCursosEstudiantes = res.usuarioInfo.Estudiantes_Cursos_Estudiantes;

          // Utiliza map para acceder a la propiedad Cursos_Cursos_Estudiantes de cada objeto en el array
          this.cursos = estudiantesCursosEstudiantes.map((item: any) => item.Cursos_Cursos_Estudiantes);

        } else if (this.usuario.id_rol === 2) {

          this.cursos = res.usuarioInfo.Creadores_Cursos
          this.datosForCreateCurso.cedula = this.infoUsuario.cedula

        }
        console.log(this.usuario, this.infoUsuario, this.cursos)
      },
      (err) => console.log('error en log', err),
    )
  }

  getCategorias() {
    this.profileService.getCategorias().subscribe(
      (res) => {
        console.log(res)
        this.categorias = res
      },
      (error: Error) => {
        console.log(error)
      }
    )
  }

  createCurso(){
    this.datosForCreateCurso.nombre = this.datosForCreateCurso.nombre.toLowerCase()
    this.datosForCreateCurso.id_categoria = Number(this.datosForCreateCurso.id_categoria)
    if (this.datosForCreateCurso.premium === false) {
      this.datosForCreateCurso.precio = 0
    }
    this.profileService.createCurso(this.datosForCreateCurso).subscribe(
      (res) => {
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error: Error) => {
        
      }
    )
  }
}
