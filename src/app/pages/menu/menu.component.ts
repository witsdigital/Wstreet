import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'street-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  if(localStorage.getItem('userData')){
    this.router.navigate(['home']);
  } else {
  this.router.navigate(['login']);
  }
}

  sair() {
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }
  

}
