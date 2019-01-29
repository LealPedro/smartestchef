import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from "../carrinho/carrinho";
import { Produto } from '../../models/produto';

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

  public produtos: Produto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient) {
    this._http.get<Produto[]>('/ws/pizza/salgadas')
      .subscribe(
          (produtos) => {
            this.produtos = produtos;
          }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzassalgadasPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }
}
