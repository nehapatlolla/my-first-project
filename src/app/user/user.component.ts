import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  
   @Input() name = " Neha"
   @Input() img = "https://packandbianesvision.com/wp-content/uploads/2022/06/girl-smiling-min-1024x672.jpg"
}



