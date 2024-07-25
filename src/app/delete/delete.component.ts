import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MoviedataComponent } from '../moviedata/moviedata.component';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MoviedataComponent],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent {
  @Input() movies: any;
  @Output() deleteItemEvent = new EventEmitter<void>();
}
