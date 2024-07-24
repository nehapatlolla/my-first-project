import { Component, Input } from '@angular/core';

import { MoviedataComponent } from '../moviedata/moviedata.component';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MoviedataComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movies: any;
}
