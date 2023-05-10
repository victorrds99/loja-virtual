import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { getDatabase, ref, set } from "firebase/database";
import {environment} from '../../environments/environment'
import { initializeApp } from 'firebase/app';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: environment.firebase.apiKey,
  authDomain: environment.firebase.authDomain,
  // The value of `databaseURL` depends on the location of the database
  databaseURL:environment.firebase.databaseURL,
  projectId: environment.firebase.projectId,
  storageBucket: environment.firebase.storageBucket,
  messagingSenderId: environment.firebase.messagingSenderId,
  appId: environment.firebase.appId,
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  measurementId: environment.firebase.measurementId, }

initializeApp(firebaseConfig);


const database = getDatabase();
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

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  url = 'https://carros-reliquias-default-rtdb.firebaseio.com/clientes/'; 
  saveClient(cliente: Cliente): Observable<any> {
    return this.httpClient.post<Cliente>(this.url, JSON.stringify(cliente),this.httpOptions)
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

   writeUserData(nome, email, cpf, endereco,cep, cidade, estado  ) {
    const db = getDatabase();
    set(ref(db, 'my-detachment' ), {
      nome: nome,
      email: email,
      cpf : cpf, 
      endereco: endereco,
      cep: cep,
      cidade: cidade,
      estado: estado,
    });
  }
  
}


