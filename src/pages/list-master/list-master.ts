import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams, Platform, ToastController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
import { QuizPage } from '../quiz/quiz';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  public quartNumber: string;
  public lesson: string;
  public toast = this.toastController.create({
    message: 'No PDF file for this lesson, Showing Default image',
    position: 'top',
    duration: 3000
  });

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public navParams: NavParams, private file: File, private document: DocumentViewer, private platform: Platform, public toastController: ToastController, private storage: Storage) {
    //this.currentItems = this.items.query(); //show all items in query
    

    this.quartNumber = this.navParams.get('quartNo');
    console.log(this.quartNumber);

    this.currentItems = this.items.query({ quarter: this.quartNumber });

    storage.set('qNum', this.quartNumber);
    
  }

  ionViewDidLoad() {
    // console.log(this.quartNumber);
  }

  openItem(item: Item) {
    // this.navCtrl.push('ItemDetailPage', {
    //   item: item
    // });
    switch(item['pdf']) { 
      case "q1l1": { 
        this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q1L1.pdf','application/pdf', {});
        this.storage.set('lNum', '1');
         break; 
      } 
      case "q1l2": { 
        this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q1L2.pdf','application/pdf', {});
        this.storage.set('lNum', '2');
         break; 
      } 
      case "q1l3": { 
        this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q1L3.pdf','application/pdf', {});
        this.storage.set('lNum', '3');
         break; 
      } 
      case "q1l4": { 
        this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q1L4.pdf','application/pdf', {});
        this.storage.set('lNum', '4');
         break; 
      } 
      case "q1l5": { 
        this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q1L5.pdf','application/pdf', {});
        this.storage.set('lNum', '5');
         break; 
      }  
      case "q2l1": { 
        this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q2L1.pdf','application/pdf', {});
        this.storage.set('lNum', '1');
         break; 
      }
      case "q2l2": { 
        this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q2L2.pdf','application/pdf', {});
        this.storage.set('lNum', '2');
         break; 
      }
      case "q2l3": { 
        this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q2L3.pdf','application/pdf', {});
        this.storage.set('lNum', '3');
         break; 
      }
      case "q3l1": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q3L1.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '1');
         break; 
      } 
      case "q3l2": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q3L2.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '2');
         break; 
      } 
      case "q3l3": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q3L3.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); 
        this.storage.set('lNum', '3');
         break; 
      } 
      case "q3l4": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q3L4.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '4');
         break; 
      } 
      case "q4l1": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L1.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '1');
         break; 
      } 
      case "q4l2": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L2.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '2');
         break; 
      } 
      case "q4l3": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L3.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '3');
         break; 
      } 
      case "q4l4": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L4.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '4');
         break; 
      } 
      case "q4l5": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L5.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '5');
         break; 
      }  
      case "q5l1": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L1.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '1');
         break; 
      } 
      case "q5l2": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L2.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '2');
         break; 
      } 
      case "q5l3": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L3.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '3');
         break; 
      } 
      case "q5l4": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L4.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '4');
         break; 
      } 
      case "q5l5": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L5.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '5');
         break; 
      }  
      case "q5l6": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L5.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '6');
         break; 
      }  
      case "q5l7": { 
        // this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q4L5.pdf','application/pdf', {});
        this.navCtrl.push('ItemDetailPage', {item: item}); this.toast.present();
        this.storage.set('lNum', '7');
         break; 
      }  
      default: { 
        this.navCtrl.push('ItemDetailPage', {item: item});
        this.toast.present();
         break; 
      } 
      // end of switch statement


      
   } 
  }

  quiz() {
    this.navCtrl.push(QuizPage, { passQNum: this.quartNumber });
  }

  openPDF(){
    
    const options: DocumentViewerOptions = {
      title: 'Sample PDF'
    }
    this.document.viewDocument(this.file.applicationDirectory +'www/assets/pdf/Q1L1.pdf','application/pdf', options);

  }
}
