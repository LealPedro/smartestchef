import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from "../carrinho/carrinho";
import { Produto } from '../../models/produto';
import { HttpClient } from '@angular/common/http';

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

  public produtos: Produto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient) {
    this._http.get<Produto[]>('http://localhost:8080/api/sobremesas')
      .subscribe(
          (produtos) => {
            this.produtos = produtos;
          }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapiosobremesasPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

}
