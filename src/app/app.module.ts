import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NoticiasRecentesComponent } from './noticias-recentes/noticias-recentes.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LeitorDeNoticiaComponent } from './leitor-de-noticia/leitor-de-noticia.component';
import { ListaDeNoticiasComponent } from './lista-de-noticias/lista-de-noticias.component';
import { SobreComponent } from './sobre/sobre.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';

const rotas: Routes = [
  {path: 'sobre', component: SobreComponent, },
  {path: 'estatistica', component: EstatisticasComponent, },
  {path: 'admin/noticias', component: ListaDeNoticiasComponent, },
  {path: 'noticias/:id', component: LeitorDeNoticiaComponent, },
  {path: '', component: NoticiasRecentesComponent, },
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NoticiasRecentesComponent,
    PaginaNaoEncontradaComponent,
    LeitorDeNoticiaComponent,
    ListaDeNoticiasComponent,
    SobreComponent,
    EstatisticasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
