import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import ResponseFilmes from '../models/response-filmes.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  
  query: string;

  constructor(private filmesService: FilmesService) { }

  ngOnInit() {
  }

  buscarFilme(query: String): void {
    if (query) {
      this.filmesService.buscar(query).subscribe((result: ResponseFilmes) => {
        console.log(result);
      });
    }
  }

}
