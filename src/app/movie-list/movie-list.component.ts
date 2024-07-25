import { Component, Input } from '@angular/core';

import { MoviedataComponent } from '../moviedata/moviedata.component';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../app.component';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MoviedataComponent, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movies: Array<IMovie> = [];

  name = '';
  poster = '';
  rating = '';
  summary = '';

  addMovie() {
    let latestMovie: IMovie = {
      name: this.name,
      poster: this.poster,
      rating: +this.rating,
      summary: this.summary,
    };
    this.movies.push(latestMovie);
  }
}
