import { User } from './../../providers/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'street-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userData: any;
  usuario: any = [];
  constructor(public user: User) { 
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
      this.user.getUserId(this.userData[0].id).then((data)=>{
          this.usuario = data;
          console.log(data);
  
      },(err)=>{
  
      });
  
    
  }

}
