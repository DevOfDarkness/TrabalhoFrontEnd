import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'contato', component: ContatoComponent},
  {path: 'sobre-nos', component: SobreNosComponent},
  {path: 'destinos', component: DestinosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
