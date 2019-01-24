import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { CardapiobebidasPage } from './cardapiobebidas';

@NgModule({
  declarations: [
    CardapiobebidasPage,
  ],
  imports: [
    IonicPageModule.forChild(CardapiobebidasPage),
    HttpClientModule
  ],
})
export class CardapiobebidasPageModule {}
