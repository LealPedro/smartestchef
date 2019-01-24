import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardapiosobremesasPage } from './cardapiosobremesas';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CardapiosobremesasPage,
  ],
  imports: [
    IonicPageModule.forChild(CardapiosobremesasPage),
    HttpClientModule
  ],
})
export class CardapiosobremesasPageModule {}
