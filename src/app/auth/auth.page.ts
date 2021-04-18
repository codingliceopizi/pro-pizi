import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedIdService } from '../logged-id.service';
import { UtentiService } from '../utenti.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})

export class AuthPage implements OnInit {

  constructor(private utenti : UtentiService, private authService : AuthService, private loggedId : LoggedIdService, private router : Router) { }


  ngOnInit() {
  }




  onLogin(id : number){

    this.authService.login();

    console.log("utente autenticato:"+this.authService.userIsAuthenticated + " id= " + id);

    this.loggedId.setId(id);

    this.router.navigateByUrl("home/tabs/benvenuto");

  };

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const emailInput = form.value.email;
    const passwordInput = form.value.password;


    let emailLista:string;
    let passwordLista:string;
    
    let check : boolean = false;

    check = this.utenti.login(emailInput, passwordInput);

    let id = this.utenti.getUtenteByEmail(emailInput).id;

    if(check) {
      this.onLogin(id);
    }

    //console.log("UTENTE LOGGATO =" + check);

    

  };







}