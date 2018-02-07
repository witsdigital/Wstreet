import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class Equipe {

    api:string = 'http://meupainel.com.br/streetcoin/api/';

    constructor(public http: Http) {
     }



      getCards(): Observable<any[]>{
        return this.http.get(this.api+'equipe/getcards')
        .map(response=>response.json())
        .catch(err=> Observable.throw(err.message));
    }

    
    getTime(credentials) {
        return new Promise((resolve, reject) => {
          let headers = new Headers();
      
          this.http.post(this.api+'equipe/getTime', JSON.stringify(credentials), {headers: headers})
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
        });
      
      }


      getPlantel(credentials) {
        return new Promise((resolve, reject) => {
          let headers = new Headers();
      
          this.http.post(this.api+'equipe/getPlantel', JSON.stringify(credentials), {headers: headers})
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
        });
      
      }

      postPlantelCompra(credentials) {
        return new Promise((resolve, reject) => {
          let headers = new Headers();
      
          this.http.post(this.api+'equipe/postPlantelCompra', JSON.stringify(credentials), {headers: headers})
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
        });
      
      }


      PostVenda(credentials) {
        return new Promise((resolve, reject) => {
          let headers = new Headers();
      
          this.http.post(this.api+'equipe/PostVenda', JSON.stringify(credentials), {headers: headers})
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
        });
      
      }

      getTimeAtributos(credentials) {
        return new Promise((resolve, reject) => {
          let headers = new Headers();
      
          this.http.post(this.api+'equipe/getTimeAtributos', JSON.stringify(credentials), {headers: headers})
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