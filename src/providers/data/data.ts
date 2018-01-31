import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public http: HttpClient) {}

  getDataFromReddit(){
    return new Promise((resolve, reject) => {
      this.http.get('https://www.reddit.com/r/awww/.json')
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
    });
  }

}
