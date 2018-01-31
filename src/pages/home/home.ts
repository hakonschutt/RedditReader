import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {
    
  }

  ionViewDidLoad(){

  }

  getData(){
    this.dataProvider.getDataFromReddit()
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
  }

}
