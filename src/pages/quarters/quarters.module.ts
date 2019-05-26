import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { QuartersPage } from './quarters';

@NgModule({
  declarations: [
    QuartersPage,
  ],
  imports: [
    IonicPageModule.forChild(QuartersPage),
    TranslateModule.forChild()
  ],
  exports: [
    QuartersPage
  ]
})
export class QuartersPageModule {}
