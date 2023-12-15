import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../../cursos.service';
import { UserInfoService } from 'src/app/database/services/user-info.service';
import { Transaction } from 'src/app/database/interfaces/transaction.interface';
import { TipoContenido } from 'src/app/database/interfaces/tipo-contenido.interface';
import { Contenido } from 'src/app/database/interfaces/contenido.interface';

@Component({
  selector: 'curso-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  usuario: any;
  infoUsuario: any;
  cursos: any;
  banner: any;
  contenidos: any;
  tiposContenido: TipoContenido[] = [];
  id_tipo_contenido: number = 0;
  nombreContenido: string = ''

  constructor(
    private cursosService: CursosService,
    private userInfoService: UserInfoService,
    private route: ActivatedRoute
  ) {
  }
  id_curso: number = 0;

  datosForCompra: Transaction = {
    id_curso_dto: 0,
    cedula_e_dto: '',
    cedula_c_dto: ''
  }

  datosForContenido: Contenido = {
    contenido: '',
    id_tipo_contenido: 0,
    id_curso: 0
  }

  ngOnInit(): void {
    const idCursoParam = this.route.snapshot.paramMap.get('id_curso');
    this.id_curso = idCursoParam ? +idCursoParam : 0;

    this.getCursosContent()

    this.getInfo()

    this.getTipoContenido()
  }

  getTipoContenido() {
    this.cursosService.getTipoContenido().subscribe(
      (res) => {
        this.tiposContenido = res
        console.log('Tipo de contenido', this.tiposContenido)
      },
      (error: Error) => {
        console.log(error);
      }


    )
  }

  getCursosContent() {
    this.cursosService.getCursoContent(this.id_curso).subscribe(
      (res: any) => {
        console.log(res)
        this.banner = res.curso
        this.contenidos = res.contenidos

        this.datosForCompra.id_curso_dto = this.banner.id_curso;
        this.datosForContenido.id_curso = this.banner.id_curso
        this.datosForCompra.cedula_c_dto = this.banner.cedula

        console.log(this.banner)
        console.log(this.contenidos)
      },
      (err: Error) => {
        console.log(err)
      }
    )
  }

  getInfo() {
    this.userInfoService.getInfo().subscribe(
      (res) => {
        console.log(res)
        this.usuario = res.usuario
        this.infoUsuario = res.usuarioInfo

        if (this.usuario.id_rol === 1) {

          this.datosForCompra.cedula_e_dto = this.infoUsuario.cedula;
          this.cursos = res.usuarioInfo.Estudiantes_Cursos_Estudiantes

        } else if (this.usuario.id_rol === 2) {
          this.cursos = res.usuarioInfo.Creadores_Cursos
        }
        console.log(this.usuario, this.infoUsuario, this.cursos)
      },
      (err) => console.log('error en log', err),
    )
  }


  tieneCurso(idCurso: number): boolean {
    return this.cursos && this.cursos.some((curso: any) => curso.id_curso === idCurso);
  }

  comprarCurso() {
    console.log(this.datosForCompra)
    this.cursosService.comprarCurso(this.datosForCompra).subscribe(
      (res) => {
        console.log('curso comprado', res)
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error: Error) => {
        console.log(error)
      }
    )
  }

  createContenido() {
    this.datosForContenido.id_tipo_contenido = Number(this.datosForContenido.id_tipo_contenido)
    console.log(this.datosForContenido)
    this.cursosService.crearContenido(this.datosForContenido).subscribe(
      (res) => {
        console.log('contenido creado', res)
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error: Error) => {
        console.log(error)
        console.log('error en front',this.datosForContenido)
      }
    )
  }

}