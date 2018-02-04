import { NoticiasdetalheComponent } from './pages/noticiasdetalhe/noticiasdetalhe.component';
import { TicketComponent } from './pages/ticket/ticket.component';
import { LoginComponent } from './pages/login/login.component';

import {Routes} from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PlantelComponent } from './pages/plantel/plantel.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DesafiosComponent } from './pages/desafios/desafios.component';


export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login/:id', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'noticia/:id', component: NoticiasdetalheComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'tickets', component: TicketComponent},
  {path: 'plantel', component: PlantelComponent},
  {path: 'desafios', component: DesafiosComponent}
]
