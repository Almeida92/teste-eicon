import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmesService } from './shared/services/filmes.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { BuscadorComponent } from './shared/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FilmesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
