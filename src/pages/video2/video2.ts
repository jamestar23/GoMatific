import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Video2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video2',
  templateUrl: 'video2.html',
})
export class Video2Page {
  @ViewChild("video") video: ElementRef; // binds to #video in video.html
  videoElement: HTMLVideoElement

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.videoElement = this.video.nativeElement;
    this.videoElement.play();
  }

}
