import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckupPageRoutingModule } from './checkup-routing.module';

import { CheckupPage } from './checkup.page';
import { CheckupSummaryPage } from '../checkup-summary/checkup-summary.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckupPageRoutingModule,
  ],
  declarations: [CheckupPage, CheckupSummaryPage ],
  entryComponents: [CheckupSummaryPage]
})
export class CheckupPageModule {}
