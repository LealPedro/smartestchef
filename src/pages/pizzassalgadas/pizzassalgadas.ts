import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from "../carrinho/carrinho";
import { Produto } from '../../models/produto';
import { CartService } from "../../services/cart.service";
import { StorageService } from "../../services/storage.service";

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
  providers:[
    CartService,
    StorageService
  ]
})
export class PizzassalgadasPage {

  public produtos: Produto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient, public cartService: CartService) {
    this._http.get<Produto[]>('/ws/pizza/salgadas')
      .subscribe(
          (produtos) => {
            this.produtos = produtos;
          }
      );
  }

  ionViewDidLoad() {}

  

  addToCart(produto: Produto) {
    this.cartService.addProduto(produto);
    this.navCtrl.push('CarrinhoPage');
  }

  /*addProduto() {
    p = new Produto();
    p.id= this.id;
    this.navCtrl.push(CarrinhoPage);
  }*/
}
