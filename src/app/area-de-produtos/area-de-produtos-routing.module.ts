import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaDeProdutosPage } from './area-de-produtos.page';

const routes: Routes = [
  {
    path: '',
    component: AreaDeProdutosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaDeProdutosPageRoutingModule {}
