import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class Noticias {

    api:string = 'http://localhost/streetcoin/api/';

    constructor(public http: Http) {
     }

    getNoticias_base(){
        return this.http.get(this.api+'noticias/getappnoticias_base').map(res=> res.json())
      }

     
    
}