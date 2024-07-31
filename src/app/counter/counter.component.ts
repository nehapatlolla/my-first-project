import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatButtonModule, MatBadgeModule, MatIconModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  like = 1;
  dislike = 0;
  likeincrement() {
    this.like = this.like + 1;
    this.check();
  }
  likedecrement() {
    this.dislike = this.dislike + 1;
  }
  check() {
    if (this.like > 10) {
      console.log('you are awesome');
    }
  }
}
