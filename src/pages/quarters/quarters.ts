import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';

//import { Item } from '../../models/item';
//import { Items } from '../../providers';

//import { MainPage, FirstRunPage } from '../'; 
import { ListMasterPage } from '../list-master/list-master';
import { Home1Page } from '../home1/home1';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-quarters',
  templateUrl: 'quarters.html',
})
export class QuartersPage {

  progress: boolean = false;

  qProg: any;   // storage value "qNum"
  lProg: any;   // storage value "lNum"

  q1Prog : boolean = true; // q1Prog : any;
  q2Prog : boolean = true; // q2Prog : any;
  q3Prog : boolean = true; // q3Prog : any;
  q4Prog : boolean = true; // q4Prog : any;
  q5Prog : boolean = true; // q5Prog : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public translateService: TranslateService, public app: App, public alertCtrl: AlertController, private storage: Storage) {
      // this.q1Prog = this.storage.set('Q1','true');
      // this.q2Prog = this.storage.set('Q2','false');
      // this.q3Prog = this.storage.set('Q3','false');
      // this.q4Prog = this.storage.set('Q4','false');
      // this.q5Prog = this.storage.set('Q5','false');
  }

  // ionViewWillLeave() {
  //   this.bgs = false;
  // }
   ionViewWillEnter() {
    
    this.storage.ready();
    this.storage.get('qNum').then((val) => {this.qProg = val;});
    this.storage.get('lNum').then((val) => {this.lProg = val;});
    console.log(this.lProg);

    if(this.lProg==null){
      this.progress = false;
    }
    else {
      this.progress = true;
    }

    // Checking all the stored data
    // this.storage.forEach( (value, key, index) => {
    //   console.log("This is the value", value)
    //   console.log("from the key", key)
    //   console.log("Index is", index)
    // })
   }

  gotoSettings() {
    this.navCtrl.push('SettingsPage');
  }

  filterQ1() {
    this.navCtrl.push(ListMasterPage, { quartNo: '1' });
  }
  filterQ2() {
    this.navCtrl.push(ListMasterPage, { quartNo: '2' });
  }
  filterQ3() {
    this.navCtrl.push(ListMasterPage, { quartNo: '3' });
  }
  filterQ4() {
    this.navCtrl.push(ListMasterPage, { quartNo: '4' });
  }
  
  filterQ5() {
    this.navCtrl.push(ListMasterPage, { quartNo: '5' });
  }

  gotoSearch() {
    this.navCtrl.push('SearchPage');
  }

  popThis() {
    //const root = this.app.getRootNav();
    //root.popToRoot();
    this.navCtrl.popTo('WelcomePage');
  }
  

  gotoVideos() {
    this.navCtrl.push('VideoPage');
  }
  gotoGame() {
    //this.navCtrl.push(Home1Page);
    //this.navCtrl.push('QuizPage');

    let alert = this.alertCtrl.create();
    alert.setTitle('Choose Difficulty');

    alert.addInput({
      type: 'radio',
      label: 'Easy',
      value: 'Easy',
      checked: true
    });

    //alert.addInput({
    //  type: 'radio',
    //  label: 'Normal',
    //  value: 'normal'
    //});

    alert.addInput({
      type: 'radio',
      label: 'Hard',
      value: 'Hard'
    });
    

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: lvl => {
        console.log('Level:', lvl);
        this.navCtrl.push(Home1Page, { diff: lvl });

        //this.testRadioOpen = false;
        //this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      
    });
  }
}
