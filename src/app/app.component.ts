import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'neha';
image='https://th.bing.com/th/id/OIP.TV2Qx00U9v5GzvD0YYxCDQHaET?w=202&h=117&c=7&r=0&o=5&dpr=1.3&pid=1.7'
}
