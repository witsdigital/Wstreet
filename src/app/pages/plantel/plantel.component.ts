import { Equipe } from './../../providers/equipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Component, OnInit } from '@angular/core';
import { get } from 'selenium-webdriver/http';

@Component({
  selector: 'street-plantel',
  templateUrl: './plantel.component.html',
  styleUrls: ['./plantel.component.css']
})
export class PlantelComponent implements OnInit {

  cards: any = [];
  plantel: any = [];
  escalacao: any= [];

  userData: any;
  time: any = [];

  venda: any;
  dados: any;

  mensagemError;
  responseData: any = [];

  constructor(private modal: NgbModal, public equipe: Equipe) { 
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.getTime();


    setInterval(() => { 
      this.getPlantel();
     }, 2000);

    
    this.getCards();
  }



  ngOnInit() {
  }



  getCards(){
    this.equipe.getCards().subscribe((data)=>{
      this.cards = data;
      console.log(data);
    },(erro)=>{
      console.log(erro);
    });
  
  }

  getTime(){
    this.equipe.getTime(this.userData[0].id).then((data)=>{
        this.time = data;

    },(err)=>{

    });

  
}

getPlantel(){
  this.equipe.getPlantel(this.userData[0].id).then((data)=>{
      this.plantel = data;

  },(err)=>{

  });


}







  comprar(item) {


if ( this.plantel.length < 22) {


  this.dados = {
    cod_card: item.id,
    cod_time: this.time[0].id,
    estado: 0,
    posicao: item.posicao
  }

            this.equipe.postPlantelCompra(this.dados).then((result) => {
             this.responseData = result;
             console.log(this.responseData);
             if(this.responseData.permissao==0){
              this.mensagemError = "Desculpe, ocorreu um erro";
             } 
             if(this.responseData.permissao==2){
              this.mensagemError = "Você ja comprou esse Jogador";
             }
             if(this.responseData.permissao==3){
              this.mensagemError = "Você ja atingiu o limite de Jogadores para a posição";
             }
             
              
           }, (err) => {
            console.log('erro')
           });
       
      this.mensagemError='';
    }

    } 


vender(item){
  this.equipe.PostVenda(item).then((result) => {
    this.responseData = result;
    console.log(this.responseData);
    if(this.responseData.permissao==0){
     this.mensagemError = "Desculpe, ocorreu um erro";
    } 
  }, (err) => {
   console.log('erro')
  });

}


  openModal(modal){
    this.modal.open(modal);
  }

  openModalVenda(modal, card){
    this.venda = card;
    this.modal.open(modal);
  }

}
