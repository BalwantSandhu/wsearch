import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

// Practise RxJs
// const observable = new Observable<Car>((observer) =>{
//   observer.next({
//     year: 2000,
//     color: 'red',
//     running: true,
//     make: {
//       name: 'Chev',
//       dateCreated: 1950
//     }
//   });
// }).pipe(
//   map(car => car.make.name)
// );

// observable.subscribe(value => {
//   console.log(value);
// });

// interface Car {
//   year: number;
//   color: string;
//   running: boolean;
//   make:{
//     name:string;
//     dateCreated: number; 
//   }
// }
export interface WikiPages{
  pageid: number;
  title: string;
  wordcount: number;
  snippet: string;
}

interface WikipediaResponse{
  query: {
    search : WikiPages[];
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string){
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php',{
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      map(response => response.query.search)
    )
  }
}

