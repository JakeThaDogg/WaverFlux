import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap }  from 'rxjs/operators';

import Movie from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private searchUrl = `http://www.omdbapi.com/?apikey=a69f8b6&s=`;
  private getMovieUrl = `http://www.omdbapi.com/?apikey=a69f8b6&i=`;

  constructor(private http: HttpClient) { }

  getMovie(id: string): Observable<Movie> {
    const url = `${this.getMovieUrl}${id}`;
    return this.http.get<Movie>(url).pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  searchMovies(term: string): Observable<Movie[]> {
    if(!term.trim()) {
      return of([])
    }
    return this.http.get<Movie[]>(`${this.searchUrl}${term}`)
    .pipe(
      map( data => data.Search),
      // tap(_=> this.log('found movies matching "${term}"')),
      catchError(this.handleError<Movie[]>('searchMovies', []))
    )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
