import { Component } from '@angular/core';
import { AcquistiService } from './services/acquisti.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //n:number = 4;//n è il numero acquisti, lo importeremo poi da un'altra pagina
  constructor(private acquistiservice:AcquistiService) {}
  nAcquisti = this.acquistiservice.getListaAcquisti().length; //importato!
}
