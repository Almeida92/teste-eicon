import { Component } from '@angular/core';
import Filme from './shared/models/filme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lista_filmes: Filme[];

  constructor() {}

  title = 'teste-eicon';

  receberLista(lista: Filme[]):void {
    this.lista_filmes = lista;
  }

}
