import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliAcquistoPageRoutingModule } from './dettagli-acquisto-routing.module';

import { DettagliAcquistoPage } from './dettagli-acquisto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliAcquistoPageRoutingModule
  ],
  declarations: [DettagliAcquistoPage]
})
export class DettagliAcquistoPageModule {}
