import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'; 

import { CarrinhoPage } from "../carrinho/carrinho";
import { Produto } from '../../models/produto';
import { CartService } from "../../services/cart.service";
import { StorageService } from "../../services/storage.service";

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
  providers:[
    CartService,
    StorageService
  ]
})
export class CardapiobebidasPage {

  public produtos: Produto[];
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient, public cartService: CartService) {
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

  addToCart(produto: Produto) {
    this.cartService.addProduto(produto);
    this.navCtrl.push('CarrinhoPage');
  }


}
