import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { MathtionaryDefinitionPage } from '../mathtionary-definition/mathtionary-definition';

@IonicPage()
@Component({
  selector: 'page-mathtionary',
  templateUrl: 'mathtionary.html',
})
export class MathtionaryPage {

  currentItems: any = [];
  wordInput: string;
  currentWords: Item[];
  hideMe: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,  public items: Items) {
    
    //if (this.wordInput == null) {
    //  this.currentItems = this.items.query({ category: 'math' });
    //}
  }
  ionViewDidLoad() {
    this.currentItems = this.items.query({ category: 'math' });

  }

  ngOnInit() {
    this.currentItems = this.items.query({ category: 'math' });
  }

  getItems(ev) {
    let val = ev.target.value;
 
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    
    this.currentItems = this.items.query({ word: val });

    //this is for no result found
    let x = this.items.query({ name: val }).length;
    if (x < 1) {
      console.log('No result found');
      this.hideMe = true;

    }
    else {
      this.hideMe = false;
    }
  }

  

  openItem(item: Item) {
    this.navCtrl.push(MathtionaryDefinitionPage, {
      item: item
    });
  }

}
