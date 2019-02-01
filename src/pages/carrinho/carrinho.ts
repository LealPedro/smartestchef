import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from "../../models/produto";
import { CartService } from "../../services/cart.service";
import { CartItem } from "../../models/cart-item";
import { StorageService } from "../../services/storage.service";

/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
  providers:[
    CartService,
    StorageService
  ]
})
export class CarrinhoPage {

  itens: CartItem[];

  private currentNumber = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartService) {
  }

  ionViewDidLoad() {
    let cart = this.cartService.getCart();
    this.itens = cart.itens;
  }

  removeItem(produto: Produto) {
    this.itens = this.cartService.removeProduto(produto).itens;
  }

  increaseQuantity(produto: Produto) {
    this.itens = this.cartService.increaseQuantity(produto).itens;
  }

  decreaseQuantity(produto: Produto) {
    this.itens = this.cartService.decreaseQuantity(produto).itens;
  }

  total(): number {
    return this.cartService.total();
  }

  checkout(){
    this.navCtrl.setRoot('MenuPage');
  }

}
