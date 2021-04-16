import { Injectable } from '@angular/core';




export class Acquisto {
  id : string;
  data : Date;
  idNegozio : string;
  idUtente : string;
  importo : number;
}
@Injectable({
  providedIn: 'root'
})
export class AcquistiService {

  public listaAcquisti : Acquisto[] = [
    {
      id : "0",
      data : new Date("2021-04-16"),
      idNegozio : "1",
      idUtente : "0",//inserire sempre lo stesso idUtente "0"
      importo : 10.5
    },
    {
      id : "1",
      data : new Date("2021-04-11"),
      idNegozio : "2",
      idUtente : "0",//inserire sempre lo stesso idUtente "0"
      importo : 60.0
    }
  ]

  constructor() { }

  getListaAcquisti(){
    //facciamo un clone Usiamo lo SPREAD operator
    return [...this.listaAcquisti];
  }

  getAcquisto(idAcquisto: string){
    return {...this.listaAcquisti.find(r => {
        return r.id === idAcquisto;
      })
    }
  }

}
