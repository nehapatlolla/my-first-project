import { Component, Input } from '@angular/core';
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
  imports: [],
  templateUrl: './moviedata.component.html',
  styleUrl: './moviedata.component.scss'
})

export class MoviedataComponent {

  // Movie[] = [];
  // constructor() {
  //   this.movies = 

  @Input() name = "Vikram"
  @Input() poster = "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg"
    @Input() rating =  8.4
      @Input() summary = "Members of a black ops team must track and eliminate a gang of masked murderers."

  }