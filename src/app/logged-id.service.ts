import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedIdService {

  constructor() { }

  public loggedId : number;
}
