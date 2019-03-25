import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../movie.service';
import { Movie } from '../movie'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  isInWatchList: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovie();
    console.log(JSON.parse(localStorage.getItem("watchlist")))
  }

  checkWatchList(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.checkWatchList(id);
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  setWatchlist(idMovie: string): void {
    this.movieService.setWatchlist(idMovie);
    this.isInWatchList = true;
  }
}
