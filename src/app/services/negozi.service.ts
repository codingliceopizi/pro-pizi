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
    },
    {
      id : "2",
      nome : "Plaza caffè",
      email: "plazacaffe@gmail.com",
      categoria : CategoriaNegozio.Ristorante,
      indirizzo: "Via col vento n.8",
      citta : "Portecorvo",
      imgUrl : [],
      descrizione: "Caffè ottimi, sia decaffeinati che non. Specialità : Caffè lungo"
      },
      {
      id : "3",
      nome : "Vestiting",
      email: "vestiting@gmail.com",
      categoria : CategoriaNegozio.Abbigliamento,
      indirizzo: "Via Pisi n.65",
      citta : "Amato",
      imgUrl : [],
      descrizione: "Tutti i vestiti di cui potreste mai avere bisogno."
      },
      {
        id : "4",
        nome : "Dress up",
        email: "dressap@gmail.com",
        categoria : CategoriaNegozio.Abbigliamento,
        indirizzo: "Via Totti n.10",
        citta : "Taurianova",
        imgUrl : [],
        descrizione: "I vestiti migliori della Piana, ora now."
        },
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
