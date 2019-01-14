import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EspaguetesPage } from './espaguetes';

@NgModule({
  declarations: [
    EspaguetesPage,
  ],
  imports: [
    IonicPageModule.forChild(EspaguetesPage),
  ],
})
export class EspaguetesPageModule {}
