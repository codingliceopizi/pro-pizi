import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Utente {
  id : number;
  nome : string;
  cognome : string;
  username : string;
  email : string;
  password : string;
  isCommerciante : boolean;
}



export class DataUtenti {
  public utenti : Utente[] = [
      {
          id : 0,
          nome : "Mario",
          cognome : "Rossi",
          username : "mariorossi01",
          email : "mariorossi01@gmail.com",
          password : "cazgrene",
          isCommerciante : false,
      }
  ];

  constructor() {}

  public getUtenti() {
      return this.utenti;
  }

  public getUtenteById(id : number) {
      return this.utenti[id];
  }
}
