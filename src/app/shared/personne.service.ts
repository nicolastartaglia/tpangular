import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  // L’URL qui sera utilisee par le client pour realiser des requetes HTTP
  url: string = 'http://localhost:8080/person';
  headers = new HttpHeaders().set('Content-Type', 'application/json');


  personnes: Array<Personne> = new Array<Personne>();

  // Injecter le service HttpClient
  constructor(private http: HttpClient) {
    // this.personnes.push({ nom: 'Wick', prenom: 'John' });
    // this.personnes.push({ nom: 'Green', prenom: 'Bob' });
   }

  // getAll() {
  //   return this.personnes;
  // }

  // fonction pipe() dans RxJS: Vous pouvez utiliser des pipe pour relier
  // les opérateurs entre eux. Les pipes vous permettent de combiner
  // plusieurs fonctions en une seule fonction.

  // La fonction pipe() prend comme arguments les fonctions que vous souhaitez
  // combiner et renvoie une nouvelle fonction qui, lorsqu'elle est exécutée,
  // exécute les fonctions composées dans l'ordre.

  // catchError () - L'opérateur catchError examinera la valeur Observable et fera
  // quelque chose avec cette valeur. Si vous voulez lancer une erreur ou appeler
  // une fonction si vous obtenez une erreur, vous pouvez le faire ici.
  // Dans l'exemple, il appellera errorMgmt et à l'intérieur de cela,
  // il enregistrera simplement cette chaîne.

   // Recupère la liste de personnes
   getAllPersons(): Observable<Personne[]>{
    let API_URL = `${this.url}/show`;

    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res.result || {}
        }),
        catchError(this.errorMgmt)
      )
   }

   // Ajoute une personne
   addPerson(data: Personne): Observable<Personne>{
    let API_URL = `${this.url}/save`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
   }

   // recupere une personne selon son identifiant
   getPerson(id :number): Observable<any>{
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
    .pipe(
      map((res: any) => {
        return res.result || {}
      }),
      catchError(this.errorMgmt)
    )
    // return this.http.get(`${this.url}/getOne/${id}`);
   }

   // Met à jour une personne selon son identifiant
   updatePerson(id: number, data: Personne): Observable<any>{
    let API_URL = `${this.url}/update/${id}`;
    return this.http.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res);
        }),
        catchError(this.errorMgmt)
      );
  }

  // Supprime une personne selon son identifiant
  deletePerson(id: number): Observable<any> {
    var API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
   // Gère les erreurs par rapport au coté serveur
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
