import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';
import { FilmDetail } from '../../model/film-detail';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers:[DataService]
})
export class MovieDetailComponent implements OnInit {

  film: FilmDetail;
  filmTitle
  buttonStatus = true;

  searchResult: FilmDetail;

  private query:Subscription;

  constructor(private route: ActivatedRoute, private service: DataService, private action:ActionService) {
    this.query = route.queryParams.subscribe(
      (queryParam: any) => {
        this.filmTitle = queryParam['film'];
      }
    )
   }

  ngOnInit() {
    let filmTitle = this.filmTitle.split(' ').join('%20');
    this.service.getFilm(filmTitle).subscribe(response =>{
      console.log(response);
      this.film = response;
      this.checkSave();
    })
  }

  saveFilm(data){
    this.action.checkFilm(data);
    this.buttonStatus = false;
  }

  checkSave(){
    var films = JSON.parse(localStorage.getItem('films'));
    
    if(films.some(item => item.id == this.film.id)){
     this.buttonStatus = false;
    }
  }
}
