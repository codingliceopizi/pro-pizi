import { Component, OnInit } from '@angular/core';
import { listaUtenti } from 'src/app/utenti.service';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})



//var lista = [Ciccio];

export class ProfiloPage implements OnInit {
  
  nome:string = listaUtenti[loggedId].getNome();
  cognome:string = listaUtenti[loggedId].getCognome();
  privneg:string = privnegg; 
  email:string =listaUtenti[loggedId].getEmail();
  id:number = listaUtenti[loggedId].getId();
  ngOnInit() {

  } 
}
//inizializzo utente ciccio
var loggedId = 0; //dovremmo prendere questo dalla pagina di login dopo essersi loggati

if(listaUtenti[loggedId].getIsCommerciante()){var privnegg = "COMMERCIANTE"}
else {var privnegg = "PRIVATO"}