
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../providers/user.service';



@Component({
  selector: 'street-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login;
  senha;
  userData: any = {};

  responseData : any;

  constructor(public user: User, private route: ActivatedRoute, private router: Router) { 
   
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
      console.log('Digite dados validos')
    }else{
        this.user.postDatas(this.userData,'signup').then((result) => {
         this.responseData = result;
         console.log(this.responseData[0].permissao);
         if(this.responseData[0].permissao==0){
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

}