import { Component, OnInit } from '@angular/core';
import { FilmesService } from './shared/services/filmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private filmesService: FilmesService) {}

  ngOnInit(): void {
    this.filmesService.buscar('batman');
  }

  title = 'teste-eicon';

}
