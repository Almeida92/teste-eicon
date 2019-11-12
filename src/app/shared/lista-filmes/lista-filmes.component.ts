import { Component, OnInit, Input } from '@angular/core';
import Filme from '../models/filme.model';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss']
})
export class ListaFilmesComponent implements OnInit {

  @Input() lista_filmes: Filme[];

  constructor() { }

  ngOnInit() {
  }

}
