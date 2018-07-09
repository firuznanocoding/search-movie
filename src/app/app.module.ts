import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Routes, RouterModule} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HomeComponent } from './components/home/home.component';


const appRoures: Routes = [
  {path: '', component: HomeComponent},
  {path:'search', component: SearchComponent},
  {path:'my-movies', component:MyMoviesComponent},
  {path:'movie-detail', component: MovieDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent,
    SearchFormComponent,
    MyMoviesComponent,
    MovieDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoures),
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
