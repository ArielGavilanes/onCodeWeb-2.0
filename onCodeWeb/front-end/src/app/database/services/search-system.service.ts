import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cursos, SearchCursos } from '../interfaces/cursos.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchSystemService {

  BASE_URL: string = 'http://localhost:4000';
  router: any;
  route: any;

  constructor(private http: HttpClient) { }

  searchCursoByLike(searchCursos: SearchCursos): Observable<Cursos[]> {
    const url = `${this.BASE_URL}/search`;

    const params = new HttpParams({
      fromObject: { ...searchCursos }
    });
    
    return this.http.get<Cursos[]> (url, { params })
    .pipe(
      tap(() => {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: searchCursos,
          queryParamsHandling: 'merge',
        });
      })
    );  
  }
}
  