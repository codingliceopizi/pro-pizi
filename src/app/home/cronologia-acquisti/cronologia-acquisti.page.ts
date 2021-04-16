import { Component, OnInit } from '@angular/core';
import { AcquistiService, Acquisto } from 'src/app/services/acquisti.service';

@Component({
  selector: 'app-cronologia-acquisti',
  templateUrl: './cronologia-acquisti.page.html',
  styleUrls: ['./cronologia-acquisti.page.scss'],
})
export class CronologiaAcquistiPage implements OnInit {


  listaAcquisti : Acquisto[];

  constructor(private acquistiService : AcquistiService) { }

  ngOnInit() {
    this.listaAcquisti = this.acquistiService.getListaAcquisti();
  }

}
