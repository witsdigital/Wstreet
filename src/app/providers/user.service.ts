import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class User {

    api:string = 'http://localhost/streetcoin/api/';

    constructor(public http: Http) {
     }



    loginuser(parans){
        return this.http.post(this.api+'apilogin/logarapp',parans).map(res=> res.json())
        .catch(err=> Observable.throw(err.message));
    }

    postDatas(credentials, type) {
        return new Promise((resolve, reject) => {
          let headers = new Headers();
      
          this.http.post(this.api+'apilogin/logarapp', JSON.stringify(credentials))
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
        });
      
      }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}