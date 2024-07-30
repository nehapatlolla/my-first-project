import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

import { MovieListComponent } from './movie-list/movie-list.component';
import { CounterComponent } from './counter/counter.component';
import { ColorGameComponent } from './color-game/color-game.component';
import { FormsModule } from '@angular/forms';
import { MoviedataComponent } from './moviedata/moviedata.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export interface IMovie {
  id: string;
  name: string;
  poster: string;
  rating: number;
  summary: string;
  trailer: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    MovieListComponent,
    CounterComponent,
    ColorGameComponent,
    FormsModule,
    RouterOutlet,
    RouterLink,
    MoviedataComponent,
    MatSlideToggleModule,
    MovieDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = [
    {
      id: 1,
      name: 'teja',
      img: 'https://static3.bigstockphoto.com/6/1/1/large1500/116748542.jpg',
    },
    {
      id: 2,
      name: 'navya',
      img: 'https://png.pngtree.com/element_our/20190529/ourmid/pngtree-a-happy-little-boy-image_1195355.jpg',
    },
  ];
}
