import { Injectable } from '@angular/core';



export enum CategoriaNegozio {
  Gelateria = "Gelateria",
  Panificio = "Panificio",
  Pizzeria = "Pizzeria",
  Ristorante = "Ristorante",
  Supermercato = "Supermercato",
  Ferramenta = "Ferramenta",
  Ortofrutta = "Ortofrutta",
  Elettrodomestici = "Elettrodomestici",
  Fioreria = "Fioraio",
  Salumeria = "Salumeria",
  Abbigliamento = "Abbigliamento"
}

export class Negozio {
  id : string;
  nome : string;
  email : string;
  categoria : CategoriaNegozio;
  indirizzo : string;
  citta : string;
  imgUrl : string[];
  descrizione: string;
}

@Injectable({
  providedIn: 'root'
})

export class NegoziService {

  public listaNegozi : Negozio[] = [
    {
      id : "0",
      nome : "Pastarito Pizzarito",
      email : "pastarito@pastarito.it",
      categoria : CategoriaNegozio.Pizzeria,
      indirizzo : "Via Roma n.5",
      citta : "Palmi",
      imgUrl : [],
      descrizione: "Gusta ottimi antipasti, primi caldi e freddi, secondi di carne e di pesce. Specialità: spaghetti"
    },
    {
      id : "1",
      nome : "Zara",
      email : "zara@zara.it",
      categoria : CategoriaNegozio.Abbigliamento,
      indirizzo : "Via Trieste n.14",
      citta : "Reggio Calabria",
      imgUrl : [],
      descrizione: "Abbigliamento casual e classico, per giovani di tutte le età."
    }
  ]


  constructor() { }

  getListaNegozi(){
    //facciamo un clone Usiamo lo SPREAD operator
    return [...this.listaNegozi];
  }

  getNegozio(idNegozio: string){
    return {...this.listaNegozi.find(r => {
        return r.id === idNegozio;
      })
    }
  }
}
