import { ROUTES } from './app.routes';
import { Chat } from './providers/chat.service';
import { Noticias } from './providers/noticias.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from './providers/user.service';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuResponsiveComponent } from './pages/menu-responsive/menu-responsive.component';
import { Videos } from './providers/videos.service';
import { TicketComponent } from './pages/ticket/ticket.component';
import { PlantelComponent } from './pages/plantel/plantel.component';
import { DesafiosComponent } from './pages/desafios/desafios.component';
import { NoticiasdetalheComponent } from './pages/noticiasdetalhe/noticiasdetalhe.component';
import { PerfilComponent } from './pages/perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoticiasComponent,
    FooterComponent,
    MenuComponent,
    MenuResponsiveComponent,
    TicketComponent,
    PlantelComponent,
    DesafiosComponent,
    NoticiasdetalheComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    Chat,
    Noticias,
    User,
    Videos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
