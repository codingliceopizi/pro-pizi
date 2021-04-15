import { Component, OnInit } from '@angular/core';
import { listaUtenti, UtentiService } from 'src/app/utenti.service';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})

export class ProfiloPage implements OnInit {
  constructor(private utenti:UtentiService){}
  
  nome:string = this.utenti.getUtentibyId(loggedId).nome;
  cognome:string = this.utenti.getUtentibyId(loggedId).cognome;
  privneg:string = privcom; 
  email:string =this.utenti.getUtentibyId(loggedId).email;
  id:number = loggedId;
  ngOnInit() {

  } 
}
//inizializzo utenti
let utentii : UtentiService = new UtentiService();
var loggedId = 0; //dovremmo prendere questo dalla pagina di login dopo essersi loggati





if(utentii.getUtentibyId(loggedId).isCommerciante){var privcom = "COMMERCIANTE"}
else {var privcom = "PRIVATO"}