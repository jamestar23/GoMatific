import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  hScoreEasy : any;
  hScoreHard : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
    this.storage.get('scoreHard').then((val) => {this.hScoreHard = val;});
    this.storage.get('scoreEasy').then((val) => {this.hScoreEasy = val;});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }
}
