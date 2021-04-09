import { Component, OnInit } from '@angular/core';
import { DataUtenti, Utente } from './auth.service';
//import { DataUtenti, Utente } from '../user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private data : DataUtenti) { }

  ngOnInit() {
  }

  //listaUtenti : DataUtenti[];

  getUtenti() : Utente[] {
    return this.data.getUtenti();
  }

  getUtenteById(id : number) : Utente {
    return this.data.getUtenteById(id);
  }



}
