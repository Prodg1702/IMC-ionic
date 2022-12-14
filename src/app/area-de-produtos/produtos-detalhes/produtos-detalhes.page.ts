import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiçosService } from 'src/app/serviços.service';

@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.page.html',
  styleUrls: ['./produtos-detalhes.page.scss'],
})
export class ProdutosDetalhesPage implements OnInit {

  public produtoSelecionado: any

  constructor(
    private dadoSelecionado: ServiçosService,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'))
    this.produtoSelecionado = this.dadoSelecionado.enviar_id(id)
  }

}
