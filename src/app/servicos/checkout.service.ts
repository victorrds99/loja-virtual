import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';


export interface Cliente { 
  nome: string
  email: string
  cpf: string
  endereco: string
  cep: string
  cidade: string
  estado: string

}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:8080/api/produtos'; // api rest fake

  saveClient(cliente: Cliente): Observable<any> {
    return this.httpClient.post<Cliente>(this.url, JSON.stringify(cliente))
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
