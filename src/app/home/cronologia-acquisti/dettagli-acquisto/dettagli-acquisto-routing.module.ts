import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliAcquistoPage } from './dettagli-acquisto.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliAcquistoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliAcquistoPageRoutingModule {}
