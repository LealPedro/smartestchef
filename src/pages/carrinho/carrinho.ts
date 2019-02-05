import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Produto } from "../../models/produto";
import { CartService } from "../../services/cart.service";
import { CartItem } from "../../models/cart-item";
import { StorageService } from "../../services/storage.service";
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/util';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public cartService: CartService, 
    public alertController: AlertController,
    public http: HttpClient
    ){
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

  goOn(){
    this.navCtrl.setRoot('MenuPage');
  }

  checkout(){
    const alert = this.alertController.create({
      message: 'Informe sua mesa:',
      inputs: [
        {
          type: 'number',
          id: 'mesa'
        }],
        buttons: [
          {
            text: 'Confirmar',
            handler: () => {
              let pedido = {
                "mesa": alert.data.inputs[0]['value'],
                "carrinho": this.cartService.getCart().itens,
                "total": this.cartService.total()
              }
              this.enviaPedido(pedido);
            }
          }]
      });
  return alert.present();
  }
  
  enviaPedido(pedido) {
    return new Promise((resolve, reject) => {
      var data = {
        mesa: pedido['mesa'],
        carrinho: pedido['carrinho'],
        total: pedido['total']
      };
      this.http.post('ws/pedidos/checkout', data)
        .subscribe(
          (result: any) => {
          resolve(result);
          //console.log((result as any));
          this.pedidoSucesso();
        },
        (error) => {
          reject(error);
          console.log((error as any)._body);
        });
    });
  }
  pedidoSucesso() {
    let alert = this.alertController.create({
      title: "Pedido Eviado",
      enableBackdropDismiss: false,
      message: "Aguarde enquanto preparamos seu pedido. Logo será entregue em sua mesa!",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.cartService.createOrClearCart();
            this.navCtrl.setRoot('MenuPage');
          }
        }
      ]
    });
    alert.present();
  }
}