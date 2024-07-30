// import { Component, Input } from '@angular/core';
// import { MoviedataComponent } from '../moviedata/moviedata.component';
// import { MovieService } from '../movie.service';

// @Component({
//   selector: 'app-movie-details',
//   standalone: true,
//   imports: [MoviedataComponent],
//   templateUrl: './movie-details.component.html',
//   styleUrl: './movie-details.component.scss',
// })
// export class MovieDetailsComponent {
//   movies: any;
//   // @Input() movies: Array<IMovie> = [];

//   constructor(public movieservice: MovieService) {
//     this.movies = this.movieservice.movies;
//   }
//   @Input() Movie = {
//     name: 'Vikram',
//     poster:
//       'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
//     rating: 8.4,
//     summary:
//       'Members of a black ops team must track and eliminate a gang of masked murderers.',
//   };
// }

// [4:28 PM] Ragav Kumar V (Unverified)
import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../app.component';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  Movie!: IMovie;
  trustedUrl!: SafeUrl;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {
    let idx = this.route.snapshot.paramMap.get('id') || 0; // From URL
    console.log(idx);
    this.Movie = this.movieService.getMovieByIndex(+idx);
    console.log(this.Movie);

    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.Movie.trailer
    );
  }
}
