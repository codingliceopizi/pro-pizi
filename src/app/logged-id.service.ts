import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedIdService {

  constructor() { }

  loggedId : number;

  public setId(idUtente : number){
    this.loggedId = idUtente;
  }

  public getId(){
    return this.loggedId;
  }



}
