import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  posts: any[] = [];
  loading: boolean = false;

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {
    
  }

  ionViewDidLoad(){
    this.getData();
  }

  getData(){
    this.loading = true;

    this.dataProvider.getDataFromReddit()
        .then((response: any) => {
          this.posts = response.data.children;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });

    if (this.loading){
      this.getData();
    }
  }

}
