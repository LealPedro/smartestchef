import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { MenuPageModule } from "../pages/menu/menu.module";
import { CardapiobebidasPageModule } from "../pages/cardapiobebidas/cardapiobebidas.module";
import { CardapiosobremesasPageModule } from "../pages/cardapiosobremesas/cardapiosobremesas.module";
import { CategoriamassasPageModule } from '../pages/categoriamassas/categoriamassas.module';
import { PizzassalgadasPageModule } from '../pages/pizzassalgadas/pizzassalgadas.module';
import { PizzasdocesPageModule } from '../pages/pizzasdoces/pizzasdoces.module';
import { CrepesPageModule } from '../pages/crepes/crepes.module';
import { EspaguetesPageModule } from '../pages/espaguetes/espaguetes.module';
import { CarrinhoPageModule } from '../pages/carrinho/carrinho.module';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    MenuPageModule,
    CardapiosobremesasPageModule,
    CategoriamassasPageModule,
    PizzassalgadasPageModule,
    PizzasdocesPageModule,
    CrepesPageModule,
    CarrinhoPageModule,
    EspaguetesPageModule,
    CardapiobebidasPageModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
