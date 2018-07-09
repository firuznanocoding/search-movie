import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { debounceTime } from 'rxjs/operators';
import { Film } from '../../model/film';
import { ActionService } from '../../services/action.service';
import {PageEvent} from '@angular/material';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [DataService]
})
export class SearchFormComponent implements OnInit {

  searchTerm : FormControl = new FormControl();

  buttonStatus:boolean = true;

  films: Film[] = [];

  length: number;
  pageSize = 10;
  pageIndex = 0;
  paginationStatus = false;

  pageEvent: PageEvent;

  constructor(private router: Router, private service: DataService, private action:ActionService){
  }

  getServerData(event?:PageEvent){
    this.pageIndex = event.pageIndex;
    this.submit();
  }

  submit(){
    
    this.service.getData(this.searchTerm.value, this.pageIndex+1).subscribe(response =>{
      this.films = response;
      this.length = this.films[0].totalRes;
      this.paginationStatus = true;
    })
  }

  ngOnInit() {
    this.searchTerm.valueChanges
      .pipe(
        debounceTime(400))
      .subscribe(data => {
          this.service.getData(data, '1').subscribe(response =>{
              this.films = response;
          })
      })
  }

  saveFilm(data){
    this.action.checkFilm(data);
  }

  checkSave(){
    var films = JSON.parse(localStorage.getItem('films'));
    if(films.some(item => item.id === this.films['id'])){
      this.buttonStatus = false;
    }
  }

}
