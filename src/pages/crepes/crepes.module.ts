import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrepesPage } from './crepes';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    CrepesPage,
  ],
  imports: [
    IonicPageModule.forChild(CrepesPage),
    HttpClientModule
  ],
})
export class CrepesPageModule {}
