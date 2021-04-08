import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CercaNegozioPageRoutingModule } from './cerca-negozio-routing.module';

import { CercaNegozioPage } from './cerca-negozio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CercaNegozioPageRoutingModule
  ],
  declarations: [CercaNegozioPage]
})
export class CercaNegozioPageModule {}
