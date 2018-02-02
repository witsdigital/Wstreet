import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Noticias } from '../../providers/noticias.service';

@Component({
  selector: 'street-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: any = [];

  constructor(public noticia: Noticias, private route: ActivatedRoute, private router: Router) { 
    this.noticias_base();
  }

  ngOnInit() {

  }

  noticias_base(){
    this.noticia.getNoticias_base().subscribe((data)=>{
      this.noticias = data;
  
    },(erro)=>{
      console.log(erro);
    });
  
  }



}
