import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'; 

import { CarrinhoPage } from "../carrinho/carrinho";
import { Produto } from '../../models/produto';

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

  public produtos: Produto[];
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient) {
    this._http.get<Produto[]>("ws/listBebidas")
      .subscribe(
          (produtos: any) => {
            //this.produtos = produtos;
            console.log(produtos);
          }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardapiobebidasPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }


}
