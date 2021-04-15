import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtentiService } from '../utenti.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private utenti : UtentiService) { }
  

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


    let emailLista:string;
    let passwordLista:string;

    let temp = false;

    //console.log(this.utenti.getLength());

    for(let i = 0; i < this.utenti.getLength(); i++) {

      emailLista = this.utenti.getUtentibyId(i).email;
      passwordLista = this.utenti.getUtentibyId(i).password;

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
