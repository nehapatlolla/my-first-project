import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Movie {
  name: string;
  poster: string;
  rating: number;
  summary: string;
}
@Component({
  selector: 'app-moviedata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moviedata.component.html',
  styleUrl: './moviedata.component.scss'
})

export class MoviedataComponent {

  movies: Movie[] = [];
  constructor() {
    this.movies = [
      {
        "name": "Vikram",
        "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
        "rating": 8.4,
        "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
      },
      {
        "name": "RRR",
        "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        "rating": 8.8,
        "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
      },
      {
        "name": "Iron man 2",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        "rating": 7,
        "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
      },
      {
        "name": "No Country for Old Men",
        "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
        "rating": 8.1,
        "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
      },
      {
        "name": "Jai Bhim",
        "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        "rating": 8.8
      },
      {
        "name": "The Avengers",
        "rating": 8,
        "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
        "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
      },
      {
        "name": "Interstellar",
        "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
        "rating": 8.6,
        "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
      },
      {
        "name": "Baahubali",
        "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
        "rating": 8,
        "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
      },
      {
        "name": "Ratatouille",
        "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
        "rating": 8,
        "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
      },
      {
        "name": "PS2",
        "poster": "data:image/jpeg;base64,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",
        "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
        "rating": 8
      },
      {
        "name": "Thor: Ragnarok",
        "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
        "rating": 8.8
      }
    ]
    



  }}