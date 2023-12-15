import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contenido } from 'src/app/database/interfaces/contenido.interface';
import { TipoContenido } from 'src/app/database/interfaces/tipo-contenido.interface';
import { Transaction } from 'src/app/database/interfaces/transaction.interface';
import { ContenidoService } from 'src/app/database/services/contenido.service';
import { CursosContentService } from 'src/app/database/services/cursos-content.service';
import { TipoContenidoService } from 'src/app/database/services/tipo-conteido.service';
import { TransactionService } from 'src/app/database/services/transaction.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private cursosContentService: CursosContentService,
    private transactionService: TransactionService,
    private tipoContenidoService: TipoContenidoService,
    private contenidoService: ContenidoService
  ) { }

  getCursoContent(id_curso: number) {
    return this.cursosContentService.getCursoContent(id_curso);
  }

  comprarCurso(transaction: Transaction): Observable<any> {
    return this.transactionService.comprarCurso(transaction)
  }

  getTipoContenido(): Observable<TipoContenido[]> {
    return this.tipoContenidoService.getTipoContenido()
  }

  crearContenido(contenido: Contenido): Observable<any> {
    // // // console.log('error en curso service', contenido)
    return this.contenidoService.crearContenido(contenido)
  }
}