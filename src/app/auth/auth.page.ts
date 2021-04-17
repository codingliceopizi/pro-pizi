import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoggedIdService } from '../logged-id.service';
import { UtentiService } from '../utenti.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {

  constructor(private utenti : UtentiService, private authService : AuthService, private loggedId : LoggedIdService) { }


  ngOnInit() {
  }




  onLogin(){

    this.authService.login();

    console.log("utente autenticato:"+this.authService.userIsAuthenticated);

  };

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const emailInput = form.value.email;
    const passwordInput = form.value.password;


    let emailLista:string;
    let passwordLista:string;
    
    let isLogged : boolean = false;

    isLogged = this.utenti.login(emailInput, passwordInput);

    console.log("UTENTE LOGGATO =" + isLogged);

    

  };







}


let logId : number;
