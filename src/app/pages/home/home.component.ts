import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from './../../providers/chat.service';
import { Noticias } from './../../providers/noticias.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'street-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias: any = [];
  mensagens: any = [];

  texto;
  responseData : any;
  mensagemError;

  userData: any ;
  dados: any;


  constructor(public noticia: Noticias, public chat: Chat, private route: ActivatedRoute, private router: Router ) { 
    
    
    setInterval(() => { 
       this.mensagens_chat();
      }, 1000);

    this.noticias_base();
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
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

  },(erro)=>{
    console.log(erro);
  });

}

mensagens_chat() {

  this.chat.getChat().subscribe((data)=>{
    this.mensagens = data;

  },(erro)=>{
    console.log(erro);
  });

}



enviar() {

  this.dados = {
  cod_equipe: this.userData[0].id,
  mensagem: this.texto
}

  if(!this.texto){
    this.mensagemError = "Digite uma mensagem valida";
    console.log('Digite dados validos');
  }else{
      this.chat.postMensagens(this.dados).then((result) => {
       this.responseData = result;
       console.log(this.responseData[0].permissao);
       if(this.responseData[0].permissao==0){
        this.mensagemError = "Desculpe, ocorreu um erro";
       }
     }, (err) => {
       this.texto = '';
     });
 
}

}



}