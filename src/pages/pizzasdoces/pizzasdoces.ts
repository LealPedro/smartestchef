import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from "../carrinho/carrinho";

/**
 * Generated class for the PizzasdocesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizzasdoces',
  templateUrl: 'pizzasdoces.html',
})
export class PizzasdocesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzasdocesPage');
  }

   goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }
}
