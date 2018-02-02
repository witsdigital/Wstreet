import { Chat } from './../../providers/chat.service';
import { Noticias } from './../../providers/noticias.service';

import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../providers/user.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap/modal/modal';



@Component({
  selector: 'street-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  noticias: any = [];
  mensagens: any = [];

  login;
  senha;

  userData: any = {};
  responseData : any;

  mensagemError;
  mensagemChatError
  mensagemErrorCadastro;


  dados: any;
  texto;

  cad_login;
  cad_email;
  cad_senha;

  rec_email;
  mensagemRecSenha;

  constructor(public noticia: Noticias, public chat: Chat, public user: User, private route: ActivatedRoute, private router: Router, private modal: NgbModal) { 
    
    setInterval(() => { 
      this.mensagens_chat();
     }, 1000);

   this.noticias_base();
  }

  ngOnInit() {
    if(localStorage.getItem('userData')){
      this.router.navigate(['home']);
    } else {
    this.router.navigate(['login']);
    }

  }

  logar() {
    this.userData = {
      login: this.login,
      senha: this.senha
    }


    console.log(this.userData);

    if(!this.login || !this.senha){
      this.mensagemError = "Preencha os campos"
      console.log('Digite dados validos');
    }else{
        this.user.postDatas(this.userData,'signup').then((result) => {
         this.responseData = result;
         console.log(this.responseData[0].permissao);
         if(this.responseData[0].permissao==0){
          this.mensagemError = "Login ou senha inválido"
             console.log('Login/Senha inválido')
         }else{
           localStorage.setItem('userData', JSON.stringify(this.responseData));
           this.router.navigate(['home']);

         }


       }, (err) => {
         // Error log
       });
   
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
  cod_equipe: 0,
  mensagem: this.texto
}

  if(!this.texto){
    this.mensagemChatError = "Digite uma mensagem valida";
    console.log('Digite dados validos');
  }else{
      this.chat.postMensagens(this.dados).then((result) => {
       this.responseData = result;
       console.log(this.responseData[0].permissao);
       if(this.responseData[0].permissao==0){
        this.mensagemChatError = "Desculpe, ocorreu um erro";
       }
     }, (err) => {
      
     });
 
}

}



openModal(modal){
  this.modal.open(modal);
}



private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}


}