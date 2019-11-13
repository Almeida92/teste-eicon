import { Component, OnInit, Input } from '@angular/core';
import Filme from '../../models/filme.model';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FilmeDetalheComponent } from '../../filme-detalhe/filme-detalhe.component';

@Component({
  selector: 'app-card-filmes',
  templateUrl: './card-filmes.component.html',
  styleUrls: ['./card-filmes.component.scss']
})
export class CardFilmesComponent implements OnInit {
  @Input() filme: Filme;
  URL_IMG: string = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/sYMAc4BLMHVAXmt7VSEnDM97Sy1.jpg';
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.URL_IMG = `${environment.URL_IMG}/${this.filme.poster_path}` ;
  }

  mostrarDetalhe(filme: Filme): void {
    const modalRef = this.modalService.open(FilmeDetalheComponent, {
      size:'lg'
    });
    modalRef.componentInstance.filme = filme;
  }

}
