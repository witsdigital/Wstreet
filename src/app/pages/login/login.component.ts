import { Chat } from './../../providers/chat.service';
import { Noticias } from './../../providers/noticias.service';

import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../providers/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'street-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  noticias: any = [];
  noticiaDetalhe: any = [];
  mensagens: any = [];

  login;
  senha;

  userData: any = {};
  responseData : any = [];

  mensagemError;
  mensagemChatError
  mensagemErrorCadastro;
  mensagemSucessCadastro;


  dados: any;
  texto;

  cad_login;
  cad_email;
  cad_senha;
  cad_senha2;

  rec_email;
  mensagemRecSenha;

  constructor(public activeModal: NgbActiveModal, public noticia: Noticias, public chat: Chat, public user: User, private route: ActivatedRoute, private router: Router, private modal: NgbModal) { 
    
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


cadastrar() {

  this.userData = {
    login: this.cad_login,
    senha: this.cad_senha,
    email: this.cad_email
  }


  if(!this.cad_login || !this.cad_senha || !this.cad_senha || !this.cad_senha2){
    this.mensagemErrorCadastro = '';
    this.mensagemErrorCadastro = "Preencha todos os campos"
  }
  
  else if(this.cad_senha != this.cad_senha2){
    this.mensagemErrorCadastro = '';
    this.mensagemErrorCadastro = "As senhas não correspondem";
  }
  else{
    this.user.postCadastro(this.userData).then((result) => {
      this.responseData = result;
      if(this.responseData.mensage==1){

        this.mensagemErrorCadastro = '';
       this.mensagemErrorCadastro = "Nome de usuario já cadastrado";
  
      }
      if(this.responseData.mensage==2){
        this.mensagemSucessCadastro = '';
        this.mensagemErrorCadastro = "Email já cadastrado";
       }
       
       else {
        this.mensagemErrorCadastro = "";
        this.mensagemSucessCadastro = "Cadastro realizado com sucesso, divirta-se.";
      }


    }, (err) => {
      // Error log
    });
    
}

}

recuperar() {

  this.user.postRecsenha(this.rec_email).then((result) => {
    this.responseData = result;
    console.log(this.responseData.permissao);
    if(this.responseData.mensage==0){
      this.mensagemSucessCadastro = '';
     this.mensagemErrorCadastro = "Email não cadastrado"
        
    }else{
    this.mensagemErrorCadastro = ''; 
    this.mensagemSucessCadastro = "Nova senha enviada para seu email"

    }


  }, (err) => {
    // Error log
  });
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
  this.mensagemSucessCadastro = '';
  this.mensagemErrorCadastro = '';
  this.modal.open(modal);
  
}


openModalNoticia(noticia, modal){
  this.noticiaDetalhe = noticia;
  this.modal.open(modal);
}






}