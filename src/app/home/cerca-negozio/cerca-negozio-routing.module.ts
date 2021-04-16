import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CercaNegozioPage } from './cerca-negozio.page';

const routes: Routes = [
  {
    path: '',
    component: CercaNegozioPage
  }
  /*{
    path: '',
    redirectTo: 'cerca-negozio'
  },
  {
    path: 'cerca-negozio',
    children : [
      {
        path : '',
        loadChildren: () => import('./cerca-negozio.module').then( m => m.CercaNegozioPageModule)
      },
      {
        path : ':idNegozio',
        loadChildren: () => import('./dettagli-negozio/dettagli-negozio.module').then(m =>m.DettagliNegozioPageModule)
      }

    ]
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CercaNegozioPageRoutingModule {}
