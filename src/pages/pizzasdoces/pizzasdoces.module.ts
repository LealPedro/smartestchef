import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PizzasdocesPage } from './pizzasdoces';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PizzasdocesPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzasdocesPage),
    HttpClientModule
  ],
})
export class PizzasdocesPageModule {}
