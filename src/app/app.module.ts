import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }     from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieDetailComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
