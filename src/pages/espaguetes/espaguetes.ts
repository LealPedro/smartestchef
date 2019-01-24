import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoPage } from "../carrinho/carrinho";
import { HttpClient } from "@angular/common/http";
import { Produto } from "../../models/produto";

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

  public produtos: Produto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _http: HttpClient) {
    this._http.get<Produto[]>('http://localhost:8080/api/espaguetes')
      .subscribe(
          (produtos) => {
            this.produtos = produtos;
          }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspaguetesPage');
  }

  goToCarrinho() {
    this.navCtrl.push(CarrinhoPage);
  }

}
