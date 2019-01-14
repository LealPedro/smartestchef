import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PizzassalgadasPage } from '../pizzassalgadas/pizzassalgadas';
import { PizzasdocesPage } from '../pizzasdoces/pizzasdoces';
import { CrepesPage } from '../crepes/crepes';
import { EspaguetesPage } from '../espaguetes/espaguetes';
import { CarrinhoPage } from "../carrinho/carrinho";

/**
 * Generated class for the CategoriamassasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoriamassas',
  templateUrl: 'categoriamassas.html',
})
export class CategoriamassasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriamassasPage');
  }

  goToPizzasSalgadas() {
    this.navCtrl.push(PizzassalgadasPage);
  }

  goToPizzasDoces() {
    this.navCtrl.push(PizzasdocesPage);
  }

  goToCrepes() {
    this.navCtrl.push(CrepesPage);
  }

  goToEspaguetes() {
    this.navCtrl.push(EspaguetesPage);
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

}
