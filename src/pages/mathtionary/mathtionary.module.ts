import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MathtionaryPage } from './mathtionary';

@NgModule({
  declarations: [
    MathtionaryPage,
  ],
  imports: [
    IonicPageModule.forChild(MathtionaryPage),
    TranslateModule.forChild()
  ],
  exports: [
    MathtionaryPage
  ]
})
export class MathtionaryPageModule {}
