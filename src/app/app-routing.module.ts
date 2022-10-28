import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'area-de-produtos',
    pathMatch: 'full'
  },
  {
    path: 'formulario',
    loadChildren: () => import('./Formulario/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'area-de-produtos',
    loadChildren: () => import('./area-de-produtos/area-de-produtos.module').then( m => m.AreaDeProdutosPageModule)
  },
  {
    path: 'produtos-detalhes/:id',
    loadChildren: () => import('./area-de-produtos/produtos-detalhes/produtos-detalhes.module').then( m => m.ProdutosDetalhesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
