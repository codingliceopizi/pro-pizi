import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodicePersonalePage } from './codice-personale.page';

const routes: Routes = [
  {
    path: '',
    component: CodicePersonalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodicePersonalePageRoutingModule {}
