import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import Movie from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private searchUrl = `http://www.omdbapi.com/?apikey=a69f8b6&s=`;
  private getMovieUrl = `http://www.omdbapi.com/?apikey=a69f8b6&i=`;

  constructor(private http: HttpClient) { }

  searchMovies(term: string): Observable<Movie[]> {
    if(!term.trim()) {
      return of([])
    }
    console.log('yo')
    console.log(this.http.get<Movie[]>(`${this.searchUrl}${term}`))
    return this.http.get<Movie[]>(`${this.searchUrl}${term}`).pipe(
      // tap(_=> this.log('found movies matching "${term}"')),
      catchError(this.handleError<Movie[]>('searchMovies', []))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
