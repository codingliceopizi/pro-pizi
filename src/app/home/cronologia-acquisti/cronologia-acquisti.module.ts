import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CronologiaAcquistiPageRoutingModule } from './cronologia-acquisti-routing.module';

import { CronologiaAcquistiPage } from './cronologia-acquisti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CronologiaAcquistiPageRoutingModule
  ],
  declarations: [CronologiaAcquistiPage]
})
export class CronologiaAcquistiPageModule {}
