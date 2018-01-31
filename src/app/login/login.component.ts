import { Chat } from './../providers/chat.service';
import { Noticias } from './../providers/noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'street-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  noticias: any = [];
  mensagens: any = [];

  constructor(public noticia: Noticias, public chat: Chat) {
    this.noticias_base();
    this.mensagens_chat();
   }

  ngOnInit() {
  }


noticias_base(){
  this.noticia.getNoticias_base().subscribe((data)=>{
    this.noticias = data;
console.log(data);
  },(erro)=>{
    console.log(erro);
  });

}

mensagens_chat() {

  this.chat.getChat().subscribe((data)=>{
    this.mensagens = data;
console.log(data);
  },(erro)=>{
    console.log(erro);
  });

}


}