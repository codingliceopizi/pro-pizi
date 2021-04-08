import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChiSiamoPageRoutingModule } from './chi-siamo-routing.module';

import { ChiSiamoPage } from './chi-siamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChiSiamoPageRoutingModule
  ],
  declarations: [ChiSiamoPage]
})
export class ChiSiamoPageModule {}
