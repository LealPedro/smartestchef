import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardapiobebidasPage } from '../cardapiobebidas/cardapiobebidas';
import { CategoriamassasPage } from '../categoriamassas/categoriamassas';
import { CardapiosobremesasPage } from '../cardapiosobremesas/cardapiosobremesas';
import { CarrinhoPage } from "../carrinho/carrinho";

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {}

  goToBebidas() {
    this.navCtrl.push(CardapiobebidasPage);
  }
  goToCategorias() {
    this.navCtrl.push(CategoriamassasPage);
  }
  goToSobremesas() {
    this.navCtrl.push(CardapiosobremesasPage);
  }
  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }
}
