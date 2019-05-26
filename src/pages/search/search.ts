import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];
  hideMe: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) {

  }
  
  getItems(ev) {
    let val = ev.target.value;
    
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({ name: val });

    let x = this.items.query({ name: val }).length;
    //console.log(x);

    if (x < 1) {
      console.log('No result found');
      this.hideMe = true;
    }
    else {
      this.hideMe = false;
    }
    
  }
  
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }

}
