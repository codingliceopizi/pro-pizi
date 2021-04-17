import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { NegoziService } from '../services/negozi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private negozioservice:NegoziService) {}
  nNegozi = this.negozioservice.getListaNegozi().length;
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
var loggedId : number = 0;