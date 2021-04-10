import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor() { }
}
export class Utentee{
  //attributi di utente
  private id:number;
  private nome:string;
  private cognome:string;
  private email:string;
  private username:string;
  private password:string;
  private isCommerciante:boolean;

  //metodi per ottenere gli attributi
  public getId(){ return this.id }
  public getNome(){ return this.nome }
  public getCognome(){ return this.cognome }
  public getEmail(){ return this.email }
  public getUsername(){ return this.username }
  public getPassword(){ return this.password }
  public getIsCommerciante(){ return this.isCommerciante }

  //metodi per settare gli attributi
  public setId(id:number){ this.id=id }
  public setNome(nome:string){ this.nome=nome }
  public setCognome(cognome:string){ this.cognome=cognome }
  public setEmail(email:string){ this.email=email }
  public setUsername(username:string){ this.username=username }
  public setPassword(password:string){ this.password=password }
  public setIsCommerciante(isCommerciante:boolean){ this.isCommerciante=isCommerciante }
}
