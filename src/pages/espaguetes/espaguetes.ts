import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from "../carrinho/carrinho";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../../models/produto";
import { CartService } from "../../services/cart.service";
import { StorageService } from "../../services/storage.service";

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
  providers:[
    CartService,
    StorageService
  ]
})
export class EspaguetesPage {

  public produtos: Produto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient, public cartService: CartService) {
    this._http.get<Produto[]>('/ws/espaguetes')
      .subscribe(
          (produtos) => {
            this.produtos = produtos;
          }
      );
  }

  ionViewDidLoad() {
    
  }

  addToCart(produto: Produto) {
    this.cartService.addProduto(produto);
    this.navCtrl.push('CarrinhoPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

}
