import { Noticias } from './../../providers/noticias.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'street-noticiasdetalhe',
  templateUrl: './noticiasdetalhe.component.html',
  styleUrls: ['./noticiasdetalhe.component.css']
})
export class NoticiasdetalheComponent implements OnInit {
  dados: any =[];

  id;
  constructor(public noticia: Noticias, public route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.getNoticia();
   }

  ngOnInit() {

  }



  getNoticia(){
    this.noticia.getNoticiaid(this.id).subscribe((data)=>{
        this.dados = data;
        console.log(data);

    },(err)=>{

    });

  }

}
