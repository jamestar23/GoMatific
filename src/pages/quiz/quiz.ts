import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataC1 } from '../../providers/dataC1'; //Chapter 1
import { DataC2 } from '../../providers/dataC2'; //Chapter 2
import { DataC3 } from '../../providers/dataC3'; //Chapter 3
import { DataC4 } from '../../providers/dataC4'; //Chapter 4
import { DataC5 } from '../../providers/dataC5'; //Chapter 5

import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  @ViewChild('slides') slides: any;
  
  public passedQNum: string;

  quiz: boolean = true;

  hasAnswered: boolean = false;
  score: number = 0;

  slideOptions: any;
  questionsList: any;

  correct: boolean = false;
  wrong: boolean = false;

  public timer = 0; // this is the interval
  time: number = 0; // time when game started

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService1: DataC1, public dataService2: DataC2, public dataService3: DataC3, public dataService4: DataC4, public dataService5: DataC5) {

    this.passedQNum = this.navParams.get('passQNum');
    console.log(this.passedQNum);

  }

  //outside constructor
  
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

    switch(this.passedQNum) { 
      case "1": { 
        console.log("Chapter 1 Quiz");
        this.dataService1.load().then((data) => {
          data.map((question) => {
            if (data.length > 10) data.length = 10;
  
            data.forEach(question => this.randomizeA(question.answers));
            return question;
          });
          this.questionsList = _.shuffle(data); // Randomize questions
        });
         break; 
      }
      case "2": { 
        console.log("Chapter 2 Quiz");
        this.dataService2.load().then((data) => {
          data.map((question) => {
            if (data.length > 10) data.length = 10;
  
            data.forEach(question => this.randomizeA(question.answers));
            return question;
          });
          this.questionsList = _.shuffle(data); // Randomize questions
        });
         break; 
      }
      case "3": { 
        console.log("Chapter 3 Quiz");
        this.dataService3.load().then((data) => {
          data.map((question) => {
            if (data.length > 10) data.length = 10;
  
            data.forEach(question => this.randomizeA(question.answers));
            return question;
          });
          this.questionsList = _.shuffle(data); // Randomize questions
        });
         break; 
      }
      case "4": { 
        console.log("Chapter 4 Quiz");
        this.dataService4.load().then((data) => {
          data.map((question) => {
            if (data.length > 10) data.length = 10;
  
            data.forEach(question => this.randomizeA(question.answers));
            return question;
          });
          this.questionsList = _.shuffle(data); // Randomize questions
        });
         break; 
      }
      case "5": { 
        console.log("Chapter 5 Quiz");
        this.dataService5.load().then((data) => {
          data.map((question) => {
            if (data.length > 10) data.length = 10;
  
            data.forEach(question => this.randomizeA(question.answers));
            return question;
          });
          this.questionsList = _.shuffle(data); // Randomize questions
        });
         break; 
      }

      default: { 
        
        console.log("Not Covered");
         break; 
      } 
    } 
  }

  
  nextSlide() {
    
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    console.log('Slided');
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
    this.navCtrl.popTo('ListMasterPage');
  }
}
