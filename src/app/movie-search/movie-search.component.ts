import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
   debounceTime,
   distinctUntilChanged,
   switchMap
  } from 'rxjs/operators';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { GeneralService } from '../general.service';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {
  movies$: Observable<Movie[]>;
  private searchTerms = new Subject<string>();
  const THEME;

  constructor(
    private movieService: MovieService,
    private generalService: GeneralService,
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.movieService.searchMovies(term))
    );
    this.generalService.currentTheme.subscribe(theme => this.THEME = theme);
  }

}
