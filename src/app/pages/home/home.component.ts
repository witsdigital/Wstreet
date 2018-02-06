import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { Chat } from './../../providers/chat.service';
import { Noticias } from './../../providers/noticias.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Videos } from '../../providers/videos.service';

import { DomSanitizer } from '@angular/platform-browser';
import { Equipe } from '../../providers/equipe.service';


@Component({
  selector: 'street-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  userData: any =[] ;

  time: any = [];
  plantel: any = [];


  noticias: any = [];
  videos: any = [];

  texto;
  responseData : any;
  mensagemError;

  
  dados: any;

  constructor(public equipe: Equipe, public video: Videos, public noticia: Noticias, public chat: Chat, private route: ActivatedRoute, private router: Router ) { 
    this.userData = JSON.parse(localStorage.getItem('userData'));
    
    this.noticias_base();
    this.getvideo();
    

    this.getTime();


    setInterval(() => { 
      this.getPlantel();
     }, 2000);
   
 
  }

  ngOnInit() {
 
    

  }

  getTime(){
    this.equipe.getTime(this.userData[0].id).then((data)=>{
        this.time = data;
    },(err)=>{

    });

  
}

getPlantel(){
  this.equipe.getPlantel(this.time[0].id).then((data)=>{
      this.plantel = data;

  },(err)=>{

  });


}


noticias_base(){
  this.noticia.getNoticias_base().subscribe((data)=>{
    this.noticias = data;

  },(erro)=>{
    console.log(erro);
  });

}


getvideo(){
  this.video.getVideos().subscribe((data)=>{
    this.videos = data;
    console.log(this.videos);
  },(erro)=>{
    console.log(erro);
  });

}





}