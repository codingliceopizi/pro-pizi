import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChiSiamoPage } from './chi-siamo.page';

const routes: Routes = [
  {
    path: '',
    component: ChiSiamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChiSiamoPageRoutingModule {}
