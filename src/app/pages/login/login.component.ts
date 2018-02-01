import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'street-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;
  senha;
  constructor() { 
    if(localStorage.getItem('userData')){
      
   }
  }

  ngOnInit() {
  }

  logar() {
    console.log(this.login, this.senha);
  }

}
