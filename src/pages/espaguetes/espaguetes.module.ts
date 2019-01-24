import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EspaguetesPage } from './espaguetes';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    EspaguetesPage,
  ],
  imports: [
    IonicPageModule.forChild(EspaguetesPage),
    HttpClientModule
  ],
})
export class EspaguetesPageModule {}
