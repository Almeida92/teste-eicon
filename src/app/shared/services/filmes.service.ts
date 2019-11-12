import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Filme from '../models/filme';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import ResponseFilmes from '../models/response-filmes';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.URL}?api_key=${environment.API_KEY}`
  }

  buscar(query: String, page: number = 1): Observable<any> {
    console.log(`${this.url}&language=pt-BR&query=${query}&page=${page}&include_adult=false`);
    return this.http.get(`${this.url}&language=pt-BR&query=${query}&page=${page}&include_adult=false`);
  }
}
