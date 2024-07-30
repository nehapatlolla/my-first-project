import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { IMovie } from '../app.component';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';
// interface Movie {
//   name: string;
//   poster: string;
//   rating: number;
//   summary: string;
// }
@Component({
  selector: 'app-moviedata',
  standalone: true,
  imports: [
    CounterComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MovieDetailsComponent,
    RouterLink,
  ],
  templateUrl: './moviedata.component.html',
  styleUrl: './moviedata.component.scss',
})
export class MoviedataComponent {
  @Input() Movie = {
    id: '99',
    name: 'Vikram',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    rating: 8.4,
    summary:
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
    trailer: 'https://www.youtube.com/embed/OKBMCL-frPU',
  };
  show: boolean = true;
  @Input() id = 0;
  // Hide: boolean = false;
  showdescription() {
    this.show = !this.show;
  }
  @Output() delete = new EventEmitter<IMovie>();

  onDelete() {
    this.delete.emit(this.Movie);
  }
}
