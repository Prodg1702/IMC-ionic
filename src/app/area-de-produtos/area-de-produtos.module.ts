import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AreaDeProdutosPageRoutingModule } from './area-de-produtos-routing.module';

import { AreaDeProdutosPage } from './area-de-produtos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AreaDeProdutosPageRoutingModule
  ],
  declarations: [AreaDeProdutosPage]
})
export class AreaDeProdutosPageModule {}
