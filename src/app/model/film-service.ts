import { inject , Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})


export class FilmService {
  private http = inject(HttpClient);
  private APIURL = 'http://www.omdbapi.com';
  private APIKEY = '56b1a38b';

  getFilmbyTitle(title: string): Observable<Film> {
    return this.http.get<Film>(`${this.APIURL}/?apikey=${this.APIKEY}&t=${title}`)
  }

  getFilmbySameTitle(title: string): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.APIURL}/?s=${title}&type=movie&apikey=${this.APIKEY}`)
  }
}
