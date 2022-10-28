import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiçosService } from '../serviços.service'
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-area-de-produtos',
  templateUrl: './area-de-produtos.page.html',
  styleUrls: ['./area-de-produtos.page.scss'],
})
export class AreaDeProdutosPage implements OnInit {

  public todosDados: any

  constructor( dados: ServiçosService, private renderer: Renderer2) {
  this.todosDados = dados.enviar_dados()
  }

  mudarTema() {
    this.renderer.setAttribute(document.body, 'color-theme', 'dark')
  }

  trocaTema(event){
    if(event.detail.checked){
      this.renderer.setAttribute(document.body, 'color-theme', 'dark')
      console.log('a')
    }
    else{
      this.renderer.setAttribute(document.body, 'color-theme', 'light')
      console.log('af')
    }
  }

  ngOnInit() {
  }

}
