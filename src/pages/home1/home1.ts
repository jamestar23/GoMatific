import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Data } from '../../providers/data'; //easy
import { DataHard } from '../../providers/dataHard'; //hard
import * as _ from 'lodash';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html'
})

export class Home1Page {
  @ViewChild('slides') slides: any;

  quiz: boolean = true;

  hasAnswered: boolean = false;
  score: number = 0;

  slideOptions: any;
  questionsList: any;

  correct: boolean = false;
  wrong: boolean = false;

  public timer = 0; // this is the interval
  time: number = 0; // time when game started

  public diff: string;

  public fScoreHard : any;
  public fScoreEasy : any;
  public sTimeHard : any;
  public sTimeEasy : any;

  // public autoplay : boolean = true; // <-------------This is it pancit!

  constructor(public navCtrl: NavController, public dataService: Data, public dataServiceH: DataHard, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    this.diff = this.navParams.get('diff');
    
    this.storage.get('scoreEasy').then((val) => {if(val==null){val=0;} this.fScoreEasy = val;});
    this.storage.get('scoreHard').then((val) => {if(val==null){val=0;} this.fScoreHard = val;});
    this.storage.get('timeEasy').then((val) => {if(val==null){val=0;} this.sTimeEasy = val;});
    this.storage.get('timeHard').then((val) => {if(val==null){val=0;} this.sTimeHard = val;});
    
  }

  startTimer() {
    setInterval(function () {
      this.timer++;
    }.bind(this), 1000)
  }
  

  ionViewWillEnter() {
    let elem = <HTMLElement>document.querySelector(".tabbar"); // Selecting css class!!
    if (elem != null) {
      elem.style.display = 'none';
    }
  }
  ionViewWillLeave() {
    this.quiz = false;
    let elem = <HTMLElement>document.querySelector(".tabbar");
    if (elem != null) {
      elem.style.display = 'flex';
    }
  }

  ionViewDidLoad() {

    this.slides.lockSwipes(true);

    if (this.diff == "Easy") {
      console.log('This is Easy');

      this.dataService.load().then((data) => {
        data.map((question) => {
          if (data.length > 10) data.length = 10;

          data.forEach(question => this.randomizeA(question.answers));
          return question;
        });
        this.questionsList = _.shuffle(data); // Randomize questions

      });
    }
    else{
      console.log('This is Hard');

      this.dataServiceH.load().then((data) => {
        data.map((question) => {
          if (data.length > 10) data.length = 10;

          data.forEach(question => this.randomizeA(question.answers));
          return question;
        });
        this.questionsList = _.shuffle(data); // Randomize questions

      });
    }

    // console.log(this.fScoreEasy);
    // console.log(this.fScoreHard);
  }


  getRandomIndex(): number {
    return Math.floor(Math.random() * this.slides.length)
  }

  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    // console.log('Slided');
    this.slides.lockSwipes(true);
  }

  autoSlide() {
    setTimeout(() => { this.nextSlide(); }, 3000);
  }


  selectAnswer(answer, question) {
    

    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;

    if (answer.correct) {
      this.score++;
      this.correct = true;

    }
    else {
      this.wrong = true;
    }
    
    setTimeout(() => {
      this.correct = false;
      this.wrong = false;
      this.hasAnswered = false;
      this.nextSlide();
      answer.selected = false;
      question.flashCardFlipped = false;
    }, 1500);

    this.time = (this.timer++) + 1; // Times start 

  }

  randomizeA(rawAnswers: any[]): any[] {

    for (let i = rawAnswers.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = rawAnswers[i];
      rawAnswers[i] = rawAnswers[j];
      rawAnswers[j] = temp;
    }

    return rawAnswers;

  }

  restartQuiz() {
    this.score = 0;
    this.timer = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1, 1000);
    this.slides.lockSwipes(true);
  }

  popThis() {
    this.navCtrl.popTo('WelcomePage');
  }
  
  onSlideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log(currentIndex);

    if(currentIndex == 11){
      console.log("11th index");
      if(this.diff == "Easy"){
        console.log("Scoring in Easy");
        if(this.fScoreEasy!=null){
          if(this.score > this.fScoreEasy){
            console.log("storing score in easy");
            this.storage.set('scoreEasy', this.score); //record
            this.storage.set('timeEasy', this.timer);
          }
        }
        else{
          console.log("storing score in easy");
          this.storage.set('scoreEasy', this.score); //record
          this.storage.set('timeEasy', this.timer);
        }
        
      }
      else{
        console.log("Scoring in Hard");
        if(this.fScoreHard!=null){
          if(this.score > this.fScoreHard){
            console.log("storing score in hard");
            this.storage.set('scoreHard', this.score); //record
            this.storage.set('timeHard', this.timer);
            
          }
        }
        else{
          console.log("storing score in hard");
          this.storage.set('scoreHard', this.score); //record
          this.storage.set('timeHard', this.timer);
        }
      }
    }
  }

  viewScore(){
    // this.navCtrl.push('ScorePage');

    let alert = this.alertCtrl.create();
    alert.setTitle('High Score');

    alert.setMessage(
      '<br><br> <b>Easy: </b>' + this.fScoreEasy + 'pts in ' + this.sTimeEasy + ' sec <br> <br>' +
      '<b>Hard: </b>' + this.fScoreHard + 'pts in ' + this.sTimeHard + ' sec <br>'
      );
    

    alert.addButton('OK');

    alert.present().then(() => {});
  }

  
}
