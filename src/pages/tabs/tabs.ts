import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

//import { Tab1Root, Tab2Root, Tab3Root } from '../';
import { Tab1Root,Tab3Root } from '../';
import { MathtionaryPage } from '../mathtionary/mathtionary';

import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudio } from '../../providers/smart-audio/smart-audio';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root = MathtionaryPage;
  //tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  //tab3Root = AboutPage;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";

  constructor(public navCtrl: NavController, public translateService: TranslateService, public smartAudio: SmartAudio, private nativeAudio: NativeAudio) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
      smartAudio.preload('tabSwitchF', 'assets/audio/click.mp3');
      // nativeAudio.preloadSimple('switchTab1', 'assets/audio/click.mp3');
    });
  }


  changeTab() {
    this.smartAudio.play('tabSwitchF');
    // this.nativeAudio.play('switchTab1');
  }
}
