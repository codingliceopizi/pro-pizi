import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodicePersonalePageRoutingModule } from './codice-personale-routing.module';

import { CodicePersonalePage } from './codice-personale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodicePersonalePageRoutingModule
  ],
  declarations: [CodicePersonalePage]
})
export class CodicePersonalePageModule {}
