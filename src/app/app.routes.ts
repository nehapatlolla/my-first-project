import { Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ColorGameComponent } from './color-game/color-game.component';

export const routes: Routes = [
  {
    path: '',
    component: DeleteComponent,
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'color',
    component: ColorGameComponent,
  },
];
