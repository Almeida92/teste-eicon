import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Filme from '../models/filme.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.scss']
})
export class FilmeDetalheComponent implements OnInit  {
  @Input() filme: Filme;
  URL_IMG: string;

  ngOnInit() {
    this.URL_IMG = `${environment.URL_IMG}/${this.filme.poster_path}` ;
  }

  constructor(public activeModal: NgbActiveModal) {}
}
