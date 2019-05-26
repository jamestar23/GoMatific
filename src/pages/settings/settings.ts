import { Component, Directive, ElementRef, state } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Settings } from '../../providers';
import { Media } from '@ionic-native/media';

import { Storage } from '@ionic/storage';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for he app.
 *
 */
//@Directive({
//  selector: '[MuteAudio]'
//})
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {

  
  // Our local settings object
  options: any;

  settingsReady = false;

  form: FormGroup;

  public isToggled: boolean; //----------toggle here
  public autoplay : boolean;
  public sounds: any;
  
  public Quarter: any; //----------------this is the quarter number
  public Lesson: any; //----------------this is the lesson number


  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;

    list: any;

  constructor(
    public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    public el: ElementRef,
    private media: Media,
    private storage: Storage, 
    public alertCtrl: AlertController, 
    private nativeAudio: NativeAudio
    ) {

    // el.nativeElement.attr('muted','false');
    //this.isToggled = false;

    storage.get('qNum').then((val) => {
      this.Quarter = val;
    });
    storage.get('lNum').then((val) => {
      this.Lesson = val;
    });
  }

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3],
      option4: [this.options.option4],
      option5: [this.options.option5],
      option7: ['Quarter ' + this.Quarter + ' Lesson ' + this.Lesson ] // progress report 
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option6]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });



  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
    var promise = new Promise((resolve, reject) => {
      this.storage.forEach((value, key, index) => {
        this.list.push(value);  
      }).then((d) => {
        resolve(this.list);
      });
    });
    return promise;
    // console.log(promise);
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
    
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }

  public notify() {
  //  console.log("Toggled: " + this.isToggled);
  //  let sounds = <HTMLElement>document.querySelector('.audioApp');
  this.storage.set('sounds', this.isToggled);
  this.storage.get('sounds').then((val)=>{this.sounds = val;});

  //  let audio = <HTMLElement>document.querySelector('audio');
   switch(this.isToggled) { 
      case true: {
        // if (audio != null) {
        //   audio.setAttribute('autoplay', 'true');
        // }
        // this.autoplay = this.sounds;
        // console.log(this.autoplay);
          break; 
      } 
      case false: { 
        // if (audio != null) {
        //   audio.setAttribute('autoplay', 'false');
        // }
        // this.autoplay = this.sounds;
        // console.log(this.autoplay);
        
          break; 
      } 
      default: { 
        console.log("Error");
          break; 
      } 
    } 
    
    console.log(this.autoplay);
  }

  resetStorage(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Reset Data');
    alert.setMessage('<br><br>Are you sure to clear all the data?<br> Requires to restart app.')
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: reset => {
        this.storage.clear();
        window.location.reload();
        // this.navCtrl.pop();
      }
    });
    alert.present().then(() => {});
  }
}


