import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Film } from '../model/film';
import { FilmDetail } from '../model/film-detail';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {}

  getData(data, page) : Observable<Film[]> {
    return this.http.get(`http://www.omdbapi.com/?s=${data}&page=${page}&apikey=b9aa07b2`)
    .pipe(
    map(data => {
      let FilmList = data['Search'];
      var totalRes = data['totalResults'];
      return FilmList.map(function(film:any){
        return {
          poster: film.Poster,
          title: film.Title,
          type: film.Type,
          year: film.Year,
          id: film.imdbID,
          totalRes: totalRes
        }
      })
    }),
    catchError(err => throwError(err))
    );
}

  getFilm(data): Observable<FilmDetail>{
    return this.http.get(`http://www.omdbapi.com/?t=${data}&apikey=b9aa07b2`)
    .pipe(
    map(data => {
      console.log(data);
        return {
          actors: data['Actors'],
          awards: data['Awards'],
          boxOffice: data['BoxOffice'],
          country: data['Country'],
          dvd: data['DVD'],
          director: data['Director'],
          genre: data['Genre'],
          language: data['Language'],
          metascore: data['Metascore'],
          plot: data['Plot'],
          poster: data['Poster'],
          production: data['Production'],
          rated: data['Rated'],
          released: data['Released'],
          runtime: data['Runtime'],
          ratings: data['Ratings'],
          title: data['Title'],
          type: data['Type'],
          website: data['Website'],
          writer:data['Writer'],
          year: data['Year'],
          id: data['imdbID'],
          imdbRating: data['imdbRating'],
          imdbVotes: data['imdbVotes']
        }
    }),
    catchError(err => throwError(err))
    );
  }

}

