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
      nome : "Ciccio",
      cognome : "Rossi",
      email : "cicciorossi01@gmail.com",
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
}
export class Utentee{
  //attributi di utente
  private id:number;
  private nome:string;
  private cognome:string;
  private email:string;
  private username:string;
  private password:string;
  private isCommerciante:boolean;

  //metodi per ottenere gli attributi
  public getId(){ return this.id }
  public getNome(){ return this.nome }
  public getCognome(){ return this.cognome }
  public getEmail(){ return this.email }
  public getUsername(){ return this.username }
  public getPassword(){ return this.password }
  public getIsCommerciante(){ return this.isCommerciante }

  //metodi per settare gli attributi
  public setId(id:number){ this.id=id }
  public setNome(nome:string){ this.nome=nome }
  public setCognome(cognome:string){ this.cognome=cognome }
  public setEmail(email:string){ this.email=email }
  public setUsername(username:string){ this.username=username }
  public setPassword(password:string){ this.password=password }
  public setIsCommerciante(isCommerciante:boolean){ this.isCommerciante=isCommerciante }
}
//Dichiarazione oggetti globali utenti
export var Ciccio = new Utentee();
Ciccio.setId(0);
Ciccio.setNome("Ciccio");
Ciccio.setCognome("Rossi");
Ciccio.setEmail("cicciorossi01@gmail.com");
Ciccio.setUsername("cicciorossi01");
Ciccio.setPassword("cazgrene");
Ciccio.setIsCommerciante(false);

var Luca = new Utentee();
Luca.setId(1);
Luca.setNome("Luca");
Luca.setCognome("Piemontese");
Luca.setEmail("lucapiemontese@gmail.com");
Luca.setUsername("lucapiemontese");
Luca.setPassword("cazgrene");
Luca.setIsCommerciante(false);

var Marco = new Utentee();
Marco.setId(2);
Marco.setNome("Marco");
Marco.setCognome("Veneto");
Marco.setEmail("marcoveneto@gmail.com");
Marco.setUsername("marcoveneto");
Marco.setPassword("cazgrene");
Marco.setIsCommerciante(false);

var Pino = new Utentee();
Pino.setId(3);
Pino.setNome("Pino");
Pino.setCognome("Bianchi");
Pino.setEmail("pinobianchi@gmail.com");
Pino.setUsername("pinobianchi");
Pino.setPassword("cazgrene");
Pino.setIsCommerciante(false);

var Maria = new Utentee();
Maria.setId(4);
Maria.setNome("Maria");
Maria.setCognome("Verdini");
Maria.setEmail("mariaverdini@gmail.com");
Maria.setUsername("mariaverdini");
Maria.setPassword("cazgrene");
Maria.setIsCommerciante(false);

var Clara = new Utentee();
Clara.setId(5);
Clara.setNome("Clara");
Clara.setCognome("Azzurri");
Clara.setEmail("clara.azzurri@gmail.com");
Clara.setUsername("claraazzurri");
Clara.setPassword("cazgrene");
Clara.setIsCommerciante(false);

var Chiara = new Utentee();
Chiara.setId(6);
Chiara.setNome("Chiara");
Chiara.setCognome("Campania");
Chiara.setEmail("chiaracampania@gmail.com");
Chiara.setUsername("chiaracampania");
Chiara.setPassword("cazgrene");
Chiara.setIsCommerciante(false);

var Piter = new Utentee();
Piter.setId(7);
Piter.setNome("Piter");
Piter.setCognome("Amato");
Piter.setEmail("piteramato@gmail.com");
Piter.setUsername("piteramato");
Piter.setPassword("cazgrene");
Piter.setIsCommerciante(true);

export var listaUtenti = [new Utentee()];
listaUtenti.pop();
listaUtenti.push(Ciccio);
listaUtenti.push(Luca);
listaUtenti.push(Marco);
listaUtenti.push(Pino);
listaUtenti.push(Maria);
listaUtenti.push(Clara);
listaUtenti.push(Chiara);
listaUtenti.push(Piter);
