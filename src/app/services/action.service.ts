import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  films = [];

  constructor() {
    this.films = JSON.parse(localStorage.getItem('films'));
   }

  checkFilm(data){
    if(localStorage.getItem('films') !== null){
      if (!this.films.some( item => item.id === data.id)) {
        return this.saveFilm(data);
      }
      else{
        console.log(false);
      }
    }else{
      localStorage.setItem('films', JSON.stringify([data]));
    }
  }

  saveFilm(data){
      if(!this.films){
        this.films = [];
      }
      this.films.push(data);
      localStorage.setItem('films', JSON.stringify(this.films));
      return "true";
  }

  deleteFilm(id){
    if(this.films.some( item => item.id === id)){
      console.log(true);
    }else{
      console.log(false);
    }
  }
}
