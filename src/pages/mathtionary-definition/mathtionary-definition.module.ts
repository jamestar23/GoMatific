import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MathtionaryDefinitionPage } from './mathtionary-definition';

@NgModule({
  declarations: [
    MathtionaryDefinitionPage,
  ],
  imports: [
    IonicPageModule.forChild(MathtionaryDefinitionPage),
    TranslateModule.forChild()
  ],
  exports: [
    MathtionaryDefinitionPage
  ]
})
export class MathtionaryDefinitionPageModule {}
