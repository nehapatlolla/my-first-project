import { Component, Input } from '@angular/core';

import { MoviedataComponent } from '../moviedata/moviedata.component';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    MoviedataComponent,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss',
})
export class AddMovieComponent {
  movies: any;
  // @Input() movies: Array<IMovie> = [];

  constructor(public movieservice: MovieService) {
    this.movies = this.movieservice.movies;
  }
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
      id: '',
      trailer: '',
    };
    this.movies.push(latestMovie);
  }
}
//create class methods
