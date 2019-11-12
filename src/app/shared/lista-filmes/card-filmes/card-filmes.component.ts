import { Component, OnInit, Input } from '@angular/core';
import Filme from '../../models/filme.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-filmes',
  templateUrl: './card-filmes.component.html',
  styleUrls: ['./card-filmes.component.scss']
})
export class CardFilmesComponent implements OnInit {
  @Input() filme: Filme;
  URL_IMG: string = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/sYMAc4BLMHVAXmt7VSEnDM97Sy1.jpg';

  constructor() { }

  ngOnInit() {
    this.URL_IMG = `${environment.URL_IMG}/${this.filme.poster_path}` ;
  }

}
