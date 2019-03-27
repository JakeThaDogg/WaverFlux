import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';
import { Movie } from '../movie'

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  private moviesToWatch = [];
  constructor(
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.moviesToWatch = this.getMovies();
    console.log(this.moviesToWatch);
  }

  getMovies(): array {
    let moviesID = JSON.parse(localStorage.getItem("watchlist"));
    let arrayToReturn = [];
    for(let i = 0; i < moviesID.length; i++) {
      this.movieService.getMovie(moviesID[i]).subscribe(movie => {
        console.log(movie)
        arrayToReturn.push(movie)
      });

      // arrayToReturn.push(movieToSearch);
      // arrayToReturn.push(this.movieService.getMovie(moviesID[i]).subscribe(moviedata => moviedata));
    }
    console.log(arrayToReturn);
    return arrayToReturn;
  }
}
