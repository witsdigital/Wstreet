import { ROUTES } from './app.routes';
import { Chat } from './providers/chat.service';
import { Noticias } from './providers/noticias.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoticiasComponent,
    FooterComponent,
    MenuComponent,
    MenuResponsiveComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    FormsModule
  ],
  providers: [
    Chat,
    Noticias,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
