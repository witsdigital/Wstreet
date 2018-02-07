import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class Tickets {

    api:string = 'http://meupainel.com.br/streetcoin/api/';

    constructor(public http: Http) {
     }



      getChat(): Observable<any[]>{
        return this.http.get(this.api+'chat/mensagens')
        .map(response=>response.json())
        .catch(err=> Observable.throw(err.message));
    }


    postTickets(credentials) {
        return new Promise((resolve, reject) => {
          let headers = new Headers();
      
          this.http.post(this.api+'chat/enviarmensagem', JSON.stringify(credentials), {headers: headers})
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