import { Injectable } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';



export class Utente {
  id : number;
  nome : string;
  cognome : string;
  email : string;
  username : string;
  password : string;
  isCommerciante : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  public listaUtenti2 : Utente[] = [
    {
      id : 0,
      nome : "Mario",
      cognome : "Rossi",
      email : "mariorossi01@gmail.com",
      username : "Ciccio900",
      password : "cazgrene",
      isCommerciante : false,
    },
    {
      id : 1,
      nome : "Luca",
      cognome : "Piemontese",
      email : "lucapiemontese@gmail.com",
      username : "lucapiemontese",
      password : "cazgrene",
      isCommerciante : false,
    },
    {
      id : 2,
      nome : "Marco",
      cognome : "Veneto",
      email : "marcoveneto@gmail.com",
      username : "marcoveneto",
      password : "cazgrene",
      isCommerciante : false,
    },
    {
      id : 3,
      nome : "Pino",
      cognome : "Bianchi",
      email : "pinobianchi@gmail.com",
      username : "pinobianchi",
      password : "cazgrene",
      isCommerciante : false,
    },
    {
      id : 4,
      nome : "Maria",
      cognome : "Verdini",
      email : "mariaverdini@gmail.com",
      username : "mariaverdini",
      password : "cazgrene",
      isCommerciante : false,
    },
    {
      id : 5,
      nome : "Clara",
      cognome : "Azzurri",
      email : "clara.azzurri@gmail.com",
      username : "claraazzurri",
      password : "cazgrene",
      isCommerciante : false,
    },
    {
      id : 6,
      nome : "Chiara",
      cognome : "Campania",
      email : "chiaracampania@gmail.com",
      username : "chiaracampania",
      password : "cazgrene",
      isCommerciante : false,
    },
    {
      id : 7,
      nome : "Piter",
      cognome : "Amato",
      email : "piteramato@gmail.com",
      username : "piteramato",
      password : "cazgrene",
      isCommerciante : true,
    },
  ];

  constructor() { }

  public getUtenti(): Utente[] {
    return this.listaUtenti2;
  }

  public getUtentibyId(id: number): Utente {
    return this.listaUtenti2[id];
  }

  public getLength() : number {
    return this.listaUtenti2.length;
  }

  public getUtenteByEmail(email : string){
    return {...this.listaUtenti2.find(r => {
        return r.email === email;
      })
    }
  }

  public getUtenteByPassword(password : string) {
    return {...this.listaUtenti2.find(r => {
        return r.password === password;
      })
    }
  }

  public login(email : string, password : string) {

    if(this.getUtenteByEmail(email).password === password) {
      //console.log("cazzzz");
      return true;
    }
    else {
      //console.log("prcd");
      return false;
    }
  
  }

}