import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { UtentiService } from '../utenti.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private utenti:UtentiService) {}
  n:number=4; //n è il numero acquisti, lo importeremo poi da un'altra pagina
  nome:string=this.utenti.getUtentibyId(loggedId).nome;
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