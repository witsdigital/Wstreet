import { LoginComponent } from './pages/login/login.component';

import {Routes} from '@angular/router'
import { HomeComponent } from './pages/home/home.component';


export const ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent}
]
