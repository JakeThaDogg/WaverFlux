import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: '', component: MovieSearchComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
