import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../../cursos.service';

@Component({
  selector: 'curso-curso-header',
  templateUrl: './curso-header.component.html',
  styleUrls: ['./curso-header.component.css']
})
export class CursoHeaderComponent implements OnInit {
  banner: any;
  contenido: any;

  constructor (
    private cursosService: CursosService,
    private route: ActivatedRoute
  ) {
  }
  id_curso: number = 0;

  ngOnInit(): void {
    const idCursoParam = this.route.snapshot.paramMap.get('id_curso');
    this.id_curso = idCursoParam ? +idCursoParam : 0;
    console.log(this.id_curso)

    console.log('Hola mundo')
    this.getCursosContent()
  }

  getCursosContent() {
    this.cursosService.getCursoContent(this.id_curso).subscribe (
      (res: any) => {
        console.log(res)
        this.banner = res.curso
        this.contenido = res.contenidos
        // console.log(this.banner)
        // console.log(this.contenido)
      },
      (err: Error) => {
        console.log(err)
      }
    )
  }
}