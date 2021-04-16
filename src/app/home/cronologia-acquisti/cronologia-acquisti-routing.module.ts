import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CronologiaAcquistiPage } from './cronologia-acquisti.page';

const routes: Routes = [
  {
    path: '',
    component: CronologiaAcquistiPage
  },
  {
    path: 'dettagli-acquisto',
    loadChildren: () => import('./dettagli-acquisto/dettagli-acquisto.module').then( m => m.DettagliAcquistoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronologiaAcquistiPageRoutingModule {}
