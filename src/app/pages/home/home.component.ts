import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from './../../providers/chat.service';
import { Noticias } from './../../providers/noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'street-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: any = [];
  mensagens: any = [];

  constructor(public noticia: Noticias, public chat: Chat, private route: ActivatedRoute, private router: Router ) { 
    this.mensagens_chat();
    this.noticias_base();
  }

  ngOnInit() {
    if(localStorage.getItem('userData')){
      this.router.navigate(['home']);
   } else {
    this.router.navigate(['login']);
   }
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