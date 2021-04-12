import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { listaUtenti, Utentee } from '../utenti.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

  onLogin(){

    
  };
 
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const emailInput = form.value.email;
    const passwordInput = form.value.password;
    //console.log(email, password);

    /*

    let nomecz = listaUtenti[0].getNome();

    console.log(nomecz);

    nomecz = listaUtenti[1].getNome();

    console.log(nomecz);
    */


    let emailLista:string;
    let passwordLista:string;

    let temp = false;

    for(let i = 0; i < listaUtenti.length; i++) {

      emailLista = listaUtenti[i].getEmail();
      passwordLista = listaUtenti[i].getPassword();

      if (emailInput === emailLista) {

        if (passwordInput === passwordLista) {

          temp = true;

        }

      }

      


    }

    if(temp === true) {
      console.log("login successo");
    }
    else {
      console.log("login fallito");
    }

  };

  





}
