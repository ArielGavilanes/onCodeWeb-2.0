import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../../../cursos.service';

@Component({
  selector: 'curso-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

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

  }

  getCursosContent() {
    this.cursosService.getCursoContent(this.id_curso).subscribe (
      (res: any) => {
        console.log(res)
      },
      (err: Error) => {
        console.log(err)
      }
    )
  }
}
