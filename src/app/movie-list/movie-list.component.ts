import { Component, Input } from '@angular/core';

import { MoviedataComponent } from '../moviedata/moviedata.component';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MoviedataComponent,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AddMovieComponent,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movies: any;
  // @Input() movies: Array<IMovie> = [];

  constructor(public movieservice: MovieService) {
    this.movies = this.movieservice.movies;
  }

  deleteMovieP(movie: IMovie) {
    let index = this.movies.indexOf(movie);
    this.movies.splice(index, 1);
  }
}
