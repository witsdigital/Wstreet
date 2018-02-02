import { TicketComponent } from './pages/ticket/ticket.component';
import { LoginComponent } from './pages/login/login.component';

import {Routes} from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { PlantelComponent } from './pages/plantel/plantel.component';


export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'tickets', component: TicketComponent},
  {path: 'plantel', component: PlantelComponent}
]
