import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../interfaces/transaction.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  BASE_URL: string = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  comprarCurso(transaction: Transaction): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/transaction`, transaction)
  }
}
