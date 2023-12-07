import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../../cursos.service';

@Component({
  selector: 'curso-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  banner: any;
  contenidos: any;

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
        this.contenidos = res.contenidos
        console.log(this.banner)
        console.log(this.contenidos)
      },
      (err: Error) => {
        console.log(err)
      }
    )
  }
}
