import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor() { }
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
Luca.setId(0);
Luca.setNome("Luca");
Luca.setCognome("Piemontese");
Luca.setEmail("lucapiemontese@gmail.com");
Luca.setUsername("lucapiemontese");
Luca.setPassword("cazgrene");
Luca.setIsCommerciante(false);

var Marco = new Utentee();
Marco.setId(0);
Marco.setNome("Marco");
Marco.setCognome("Veneto");
Marco.setEmail("marcoveneto@gmail.com");
Marco.setUsername("marcoveneto");
Marco.setPassword("cazgrene");
Marco.setIsCommerciante(false);

var Pino = new Utentee();
Pino.setId(0);
Pino.setNome("Pino");
Pino.setCognome("Bianchi");
Pino.setEmail("pinobianchi@gmail.com");
Pino.setUsername("pinobianchi");
Pino.setPassword("cazgrene");
Pino.setIsCommerciante(false);

var Maria = new Utentee();
Maria.setId(0);
Maria.setNome("Maria");
Maria.setCognome("Verdini");
Maria.setEmail("mariaverdini@gmail.com");
Maria.setUsername("mariaverdini");
Maria.setPassword("cazgrene");
Maria.setIsCommerciante(false);

var Clara = new Utentee();
Clara.setId(0);
Clara.setNome("Clara");
Clara.setCognome("Azzurri");
Clara.setEmail("clara.azzurri@gmail.com");
Clara.setUsername("claraazzurri");
Clara.setPassword("cazgrene");
Clara.setIsCommerciante(false);

var Chiara = new Utentee();
Chiara.setId(0);
Chiara.setNome("Chiara");
Chiara.setCognome("Campania");
Chiara.setEmail("chiaracampania@gmail.com");
Chiara.setUsername("chiaracampania");
Chiara.setPassword("cazgrene");
Chiara.setIsCommerciante(false);

var Piter = new Utentee();
Piter.setId(0);
Piter.setNome("Piter");
Piter.setCognome("Amato");
Piter.setEmail("piteramato@gmail.com");
Piter.setUsername("piteramato");
Piter.setPassword("cazgrene");
Piter.setIsCommerciante(false);

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
