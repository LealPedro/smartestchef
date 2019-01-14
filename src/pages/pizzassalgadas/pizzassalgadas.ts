import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from "../carrinho/carrinho";

/**
 * Generated class for the PizzassalgadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizzassalgadas',
  templateUrl: 'pizzassalgadas.html',
})
export class PizzassalgadasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzassalgadasPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }
}
