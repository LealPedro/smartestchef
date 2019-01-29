import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarrinhoPage } from "../carrinho/carrinho";
import { Produto } from '../../models/produto';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the PizzasdocesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizzasdoces',
  templateUrl: 'pizzasdoces.html',
})
export class PizzasdocesPage {

  public produtos: Produto[];
  pizzas;
  txtSabor;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient) {
  }

  listaPizzas() {
    this._http.get<Produto[]>('/ws/pizza/doces')
      .subscribe(
          (produtos) => {
            this.produtos = produtos;
          }
      );
  }

  localizarPizza() {
      // Reset items back to all of the items
      this.pizzas = Array.of(this.listaPizzas());

      // set val to the value of the ev target
      var sabor = this.txtSabor;

      // if the value is an empty string don't filter the items
      if (sabor && sabor.trim() != '') {
        this.pizzas = this.pizzas.filter((pizza) => {
          return (pizza.toLowerCase().indexOf(sabor.toLowerCase()) > -1);
        })
      }
    }
 
  ionViewDidLoad() {
    this.listaPizzas();
  }

   goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }
}
