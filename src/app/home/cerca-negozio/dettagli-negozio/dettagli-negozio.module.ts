import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DettagliNegozioPageRoutingModule } from './dettagli-negozio-routing.module';

import { DettagliNegozioPage } from './dettagli-negozio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DettagliNegozioPageRoutingModule
  ],
  declarations: [DettagliNegozioPage]
})
export class DettagliNegozioPageModule {}
