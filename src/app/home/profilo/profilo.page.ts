import { Component, OnInit } from '@angular/core';
import { DataUtenti,Utente } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.page.html',
  styleUrls: ['./profilo.page.scss'],
})
export class ProfiloPage implements OnInit {

  nome:string = "Mario";
  cognome:string = "Rossi";
  
  privneg:string = "PRIVATO"; //o negoziante
  email:string ="email@example.com"
  id:number = 0;

  //constructor(public Dataa:DataUtenti) { }
  
  //parola = this.Dataa.getUtenteById(0);
 
  

  ngOnInit() {

  }
  
}
