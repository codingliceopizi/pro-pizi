import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CronologiaAcquistiPage } from './cronologia-acquisti.page';

const routes: Routes = [
  {
    path: '',
    component: CronologiaAcquistiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronologiaAcquistiPageRoutingModule {}
