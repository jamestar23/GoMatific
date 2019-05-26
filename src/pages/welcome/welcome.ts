import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

import { SmartAudio } from '../../providers/smart-audio/smart-audio';

import { MainPage } from '../';


/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  enter: boolean = true;
  constructor(public navCtrl: NavController, private smartAudio: SmartAudio, public platform: Platform, private nativeAudio: NativeAudio) {
    
    // nativeAudio.preloadSimple('intro','assets/audio/intro.mp3').then((msg)=>{console.log("message: " + msg);}, (error)=>{ console.log("error: " + error);});
  }
  ionViewDidLoad(){
    // this.platform.ready().then(() => {	
    //   this.nativeAudio.preloadComplex('intro2','assets/audio/intro.mp3', 1, 1, 0).then(() => {     
    //     this.nativeAudio.play('intro2');
    //   });
    // });
  }
  ionViewDidLeave(){
    // this.nativeAudio.stop('intro2');
  }
  ionViewDidEnter() {
  }
  ionViewWillLeave() {
    this.enter = false;
  }

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }

  startApp() {
    this.navCtrl.push(MainPage);
  }

  test() {
    //this.navCtrl.push(TestPage);
  }
}
