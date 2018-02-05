import { Equipe } from './../../providers/equipe.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'street-plantel',
  templateUrl: './plantel.component.html',
  styleUrls: ['./plantel.component.css']
})
export class PlantelComponent implements OnInit {

  cards: any = [];

  plantel: any = [];

  escalacao: any= [];


  mensagemError;

  constructor(private modal: NgbModal, public equipe: Equipe) { 
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

  comprar(item) {


if ( this.plantel.length < 22) {

    
    var count = 0;
    if (this.plantel.length==0){
      this.plantel.push(item);
    } else {

      for (var i = 0; i < this.plantel.length; i++) {
        if (item == this.plantel[i]){
          this.mensagemError="Você já comprou esse Jogador";
          count++;
      }
    }
    if (count == 0) {
      this.plantel.push(item);
      this.mensagemError='';
    }

    } 


  } else {
    this.mensagemError="Voê já possui 22 jogadores"
  }

  }


  openModal(modal){
    this.modal.open(modal);
  }
}
