import { Component } from '@angular/core';

@Component({
  selector: 'app-moviedata',
  standalone: true,
  imports: [],
  templateUrl: './moviedata.component.html',
  styleUrl: './moviedata.component.scss'
})
export class MoviedataComponent {
  
    name= "Vikram";
    poster= "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg";
    rating=8.4;
    summary= "Members of a black ops team must track and eliminate a gang of masked murderers."
  
}


