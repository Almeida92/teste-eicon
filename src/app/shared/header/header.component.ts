import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Filme from '../models/filme.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() receberLista = new EventEmitter<Filme[]>();
   
  constructor() { }

  ngOnInit() {
  }

  enviarLista(lista: Filme[]):void {
    this.receberLista.emit(lista);
  }


}
