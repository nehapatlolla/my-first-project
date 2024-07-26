import { Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

export const routes: Routes = [
  {
    path: '',
    component: DeleteComponent,
  },
  {
    path: 'films',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'color',
    component: ColorGameComponent,
  },
  {
    path: 'movies/add',
    component: AddMovieComponent,
  },
];
