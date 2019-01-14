import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from "../carrinho/carrinho";

/**
 * Generated class for the EspaguetesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-espaguetes',
  templateUrl: 'espaguetes.html',
})
export class EspaguetesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspaguetesPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

}
