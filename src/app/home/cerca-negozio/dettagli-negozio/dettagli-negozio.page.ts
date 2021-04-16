import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Negozio, NegoziService } from 'src/app/services/negozi.service';

@Component({
  selector: 'app-dettagli-negozio',
  templateUrl: './dettagli-negozio.page.html',
  styleUrls: ['./dettagli-negozio.page.scss'],
})
export class DettagliNegozioPage implements OnInit {

  negozioCorrente : Negozio;

  constructor(private activatedRoute :ActivatedRoute,
    private negoziService : NegoziService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('idNegozio');
      this.negozioCorrente = this.negoziService.getNegozio(id);
     })
  }

}
