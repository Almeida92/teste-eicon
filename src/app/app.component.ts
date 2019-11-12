import { Component, OnInit } from '@angular/core';
import { FilmesService } from './shared/services/filmes.service';
import ResponseFilmes from './shared/models/response-filmes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.filmesService.buscar('batman').subscribe((result: ResponseFilmes) => {
      console.log(result);
    });
  }

  title = 'teste-eicon';

}
