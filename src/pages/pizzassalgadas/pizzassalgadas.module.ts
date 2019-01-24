import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { PizzassalgadasPage } from './pizzassalgadas';

@NgModule({
  declarations: [
    PizzassalgadasPage,
  ],
  imports: [
    IonicPageModule.forChild(PizzassalgadasPage),
    HttpClientModule
  ],
})
export class PizzassalgadasPageModule {}
