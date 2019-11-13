import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesService } from './shared/services/filmes.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';
import { ListaFilmesComponent } from './shared/lista-filmes/lista-filmes.component';
import { CardFilmesComponent } from './shared/lista-filmes/card-filmes/card-filmes.component';
import { FilmeDetalheComponent } from './shared/filme-detalhe/filme-detalhe.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuscadorComponent,
    ListaFilmesComponent,
    CardFilmesComponent,
    FilmeDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    FilmesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    FilmeDetalheComponent
  ]
})
export class AppModule { }
