import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DettagliNegozioPage } from './dettagli-negozio.page';

const routes: Routes = [
  {
    path: '',
    component: DettagliNegozioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DettagliNegozioPageRoutingModule {}
