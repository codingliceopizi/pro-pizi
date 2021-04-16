import { Component, OnInit } from '@angular/core';
import { LoggedIdService } from 'src/app/logged-id.service';
import { Negozio, NegoziService } from 'src/app/services/negozi.service';

@Component({
  selector: 'app-cerca-negozio',
  templateUrl: './cerca-negozio.page.html',
  styleUrls: ['./cerca-negozio.page.scss'],
})
export class CercaNegozioPage implements OnInit {

  listaNegozi : Negozio[];

  constructor(private loggedIdService : LoggedIdService,
     private negoziService : NegoziService) { }

  ngOnInit() {

    //if (this.loggedIdService.getId()) {
      this.listaNegozi = this.negoziService.getListaNegozi();


    //}

  }

}
