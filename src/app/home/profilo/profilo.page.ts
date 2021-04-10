import { Component, OnInit } from '@angular/core';
import { Utentee } from 'src/app/utenti.service';


@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})



//var lista = [Ciccio];

export class ProfiloPage implements OnInit {
  
  nome:string = Ciccio.getNome();
  cognome:string = Ciccio.getCognome();
  privneg:string = privnegg; 
  email:string =Ciccio.getEmail();
  id:number = Ciccio.getId();
  ngOnInit() {

  } 
}
//inizializzo utente ciccio
var Ciccio = new Utentee();
Ciccio.setId(0);
Ciccio.setNome("Ciccio");
Ciccio.setCognome("Rossi");
Ciccio.setEmail("mariorossi01@gmail.com");
Ciccio.setUsername("mariorossi01");
Ciccio.setPassword("cazgrene");
Ciccio.setIsCommerciante(false);

if(Ciccio.getIsCommerciante()){var privnegg = "COMMERCIANTE"}
else {var privnegg = "PRIVATO"}