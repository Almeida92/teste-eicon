import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilmesService } from '../services/filmes.service';
import ResponseFilmes from '../models/response-filmes.model';
import Filme from '../models/filme.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  
  query: string;
  @Output() enviarLista = new EventEmitter<Filme[]>();

  constructor(private filmesService: FilmesService) { }

  ngOnInit() {
  }

  buscarFilme(query: String): void {
    if (query) {
      this.filmesService.buscar(query).subscribe((response: ResponseFilmes) => {
        this.enviarLista.emit(response.results);
      });
    } else {
      this.enviarLista.emit([]);
    }
  }

}
