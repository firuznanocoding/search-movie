import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css']
})
export class MyMoviesComponent implements OnInit {

  films = [];

  constructor(private action: ActionService) { }

  ngOnInit() {

    this.films = JSON.parse(localStorage.getItem('films'));

  }

  deleteMovie(id){
    for(let i = 0; i < this.films.length; i++){
      if(this.films[i].id == id){
        this.films.splice(i, 1);
        return localStorage.setItem('films', JSON.stringify(this.films));
      }
    }
  }


}
