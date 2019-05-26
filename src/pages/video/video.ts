//import { Component, ViewChild, ElementRef } from '@angular/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})

export class VideoPage {
  //@ViewChild("video") video: ElementRef; // binds to #video in video.html
  //videoElement: HTMLVideoElement
  currentPage = 'page1';


  vid1 = "https://www.youtube.com/embed/hwevcgg1p3u";
  vid2 = "https://www.youtube.com/embed/d-SW6URvqqM";
  vid3 = "https://www.youtube.com/embed/6WkAQRJjkj0";
  vid4 = "https://www.youtube.com/embed/UiUwJuh1ceM";
  vid5 = "https://www.youtube.com/embed/8ce52rF9L20";
  vid6 = "https://www.youtube.com/embed/eDEUJ0xX5qQ";

  constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');
  }

  goBack() {
    this.currentPage = "page1";
  }

  sanitize1(vid1) {
    return this.dom.bypassSecurityTrustResourceUrl(vid1);
  }
  sanitize2(vid2) {
    return this.dom.bypassSecurityTrustResourceUrl(vid2);
  }
  sanitize3(vid3) {
    return this.dom.bypassSecurityTrustResourceUrl(vid3);
  }
  sanitize4(vid4) {
    return this.dom.bypassSecurityTrustResourceUrl(vid4);
  }
  sanitize5(vid5) {
    return this.dom.bypassSecurityTrustResourceUrl(vid5);
  }
  sanitize6(vid6) {
    return this.dom.bypassSecurityTrustResourceUrl(vid6);
  }


  gotoPage2() {
    this.currentPage = "page2";
  }
  gotoPage3() {
    this.currentPage = "page3";
  }
  gotoPage4() {
    this.currentPage = "page4";
  }
  gotoPage5() {
    this.currentPage = "page5";
  }
  gotoPage6() {
    this.currentPage = "page6";
  }
  gotoPage7() {
    this.currentPage = "page7";
  }
}
