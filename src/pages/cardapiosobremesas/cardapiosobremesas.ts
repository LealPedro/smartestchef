import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from "../carrinho/carrinho";

/**
 * Generated class for the CardapiosobremesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardapiosobremesas',
  templateUrl: 'cardapiosobremesas.html',
})
export class CardapiosobremesasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapiosobremesasPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

}
