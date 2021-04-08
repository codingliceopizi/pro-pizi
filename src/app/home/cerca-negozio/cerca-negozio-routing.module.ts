import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CercaNegozioPage } from './cerca-negozio.page';

const routes: Routes = [
  {
    path: '',
    component: CercaNegozioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CercaNegozioPageRoutingModule {}
