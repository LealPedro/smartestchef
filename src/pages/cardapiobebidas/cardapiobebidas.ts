import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from "../carrinho/carrinho";

/**
 * Generated class for the CardapiobebidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapiobebidas',
  templateUrl: 'cardapiobebidas.html',
})
export class CardapiobebidasPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapiobebidasPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

}
