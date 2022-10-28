import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiçosService {

  private produtos =[
    {id: 1, nome: "Amortecedor", valor:  "1299,99", fabricante: "Marzzochi"},
    {id: 2, nome: "Freio", valor: "600,00", fabricante: "shimano"},
    {id: 3, nome: "Aro", valor: "700,00", fabricante: "AlexRims"}
  ]

  constructor() { }

  enviar_dados() {
    return this.produtos
  }

  enviar_id(id:number){
    const dados_selecionados = this.produtos.filter(produto => produto.id === id)
    return dados_selecionados[0]
  }
}
