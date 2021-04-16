import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AcquistiService, Acquisto } from 'src/app/services/acquisti.service';

@Component({
  selector: 'app-dettagli-acquisto',
  templateUrl: './dettagli-acquisto.page.html',
  styleUrls: ['./dettagli-acquisto.page.scss'],
})
export class DettagliAcquistoPage implements OnInit {

  acquistoCorrente : Acquisto;

  constructor(private activatedRoute :ActivatedRoute,
    private acquistiService : AcquistiService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('idAcquisto');
      this.acquistoCorrente = this.acquistiService.getAcquisto(id);
     })
  }

}
