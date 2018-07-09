import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { error } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  constructor(private http: DataService){}

  ngOnInit(){
    /*this.http.getData().subscribe((res)=>{
      console.log(res);
    }, err => {
      console.log(err);
    });*/
  }
}
