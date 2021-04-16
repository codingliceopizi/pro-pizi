import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  /*{
    path: '',
    component: HomePage
  },*/

  {
    path: 'tabs',
    component: HomePage,
    children : [
      {
        path: 'cronologia-acquisti',
        loadChildren: () => import('./cronologia-acquisti/cronologia-acquisti.module').then( m => m.CronologiaAcquistiPageModule)
      },
      {
        path: 'cerca-negozio',
        loadChildren: () => import('./cerca-negozio/cerca-negozio.module').then( m => m.CercaNegozioPageModule)
      },
      {
        path: 'codice-personale',
        loadChildren: () => import('./codice-personale/codice-personale.module').then( m => m.CodicePersonalePageModule)
      },
      {
        path: 'modifica-profilo',
        loadChildren: () => import('./modifica-profilo/modifica-profilo.module').then( m => m.ModificaProfiloPageModule)
      },
      {
        path: 'profilo',
        loadChildren: () => import('./profilo/profilo.module').then( m => m.ProfiloPageModule)
      },
      {
        path: 'chi-siamo',
        loadChildren: () => import('./chi-siamo/chi-siamo.module').then( m => m.ChiSiamoPageModule)
      },
      {
        path: 'benvenuto',
        loadChildren: () => import('./benvenuto/benvenuto.module').then( m => m.BenvenutoPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo : 'tabs/benvenuto',
    pathMatch : 'full'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
