import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContatoComponent,
    DestinosComponent,
    SobreNosComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
