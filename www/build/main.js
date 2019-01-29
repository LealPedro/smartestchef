webpackJsonp([2],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cardapiobebidas/cardapiobebidas.module": [
		155
	],
	"../pages/cardapiosobremesas/cardapiosobremesas.module": [
		157
	],
	"../pages/carrinho/carrinho.module": [
		159
	],
	"../pages/categoriamassas/categoriamassas.module": [
		160
	],
	"../pages/checkout/checkout.module": [
		291,
		1
	],
	"../pages/crepes/crepes.module": [
		166
	],
	"../pages/espaguetes/espaguetes.module": [
		167
	],
	"../pages/menu/menu.module": [
		168
	],
	"../pages/pizzasdoces/pizzasdoces.module": [
		170
	],
	"../pages/pizzassalgadas/pizzassalgadas.module": [
		171
	],
	"../pages/resultadobusca/resultadobusca.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapiobebidasPageModule", function() { return CardapiobebidasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardapiobebidas__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardapiobebidasPageModule = /** @class */ (function () {
    function CardapiobebidasPageModule() {
    }
    CardapiobebidasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cardapiobebidas__["a" /* CardapiobebidasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__cardapiobebidas__["a" /* CardapiobebidasPage */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], CardapiobebidasPageModule);
    return CardapiobebidasPageModule;
}());

//# sourceMappingURL=cardapiobebidas.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapiobebidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CardapiobebidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardapiobebidasPage = /** @class */ (function () {
    function CardapiobebidasPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._http.get("ws/listBebidas")
            .subscribe(function (produtos) {
            //this.produtos = produtos;
            console.log(produtos);
        });
    }
    CardapiobebidasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardapiobebidasPage');
    };
    CardapiobebidasPage.prototype.goToCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    CardapiobebidasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardapiobebidas',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\cardapiobebidas\cardapiobebidas.html"*/'<!--\n  Generated template for the CardapiobebidasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Bebidas</ion-title>\n    <ion-buttons end="">\n			<button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n				<ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n			</span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n		</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n  <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  >\n</ion-searchbar>\n\n<ion-content class="cards-bg">\n \n \n  <ion-card *ngFor="let produto of produtos">\n\n    <div>\n      <img class="img" src="{{produto.imagem}}"/>\n    </div>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{produto.nome}}\n      </ion-card-title>\n      <p>\n        {{produto.descricao}}\n      </p>\n\n      <!-- <ion-item>\n      <ion-label>{{produto.descricao}}</ion-label>\n      <ion-select [(ngModel)]="tamanho" interface="popover">\n        <ion-option value="nes">350 ml</ion-option>\n        <ion-option value="n64">600 ml</ion-option>\n        <ion-option value="ps">2 L</ion-option>\n      </ion-select>\n    </ion-item>-->\n      \n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n          <p class="p1">\n              R$ {{produto.preco}}\n            </p>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          \n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button class="button" ion-button clear small icon-start>\n          <ion-icon name=\'cart\'></ion-icon>\n         \n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\cardapiobebidas\cardapiobebidas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], CardapiobebidasPage);
    return CardapiobebidasPage;
}());

//# sourceMappingURL=cardapiobebidas.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapiosobremesasPageModule", function() { return CardapiosobremesasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardapiosobremesas__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CardapiosobremesasPageModule = /** @class */ (function () {
    function CardapiosobremesasPageModule() {
    }
    CardapiosobremesasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cardapiosobremesas__["a" /* CardapiosobremesasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cardapiosobremesas__["a" /* CardapiosobremesasPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], CardapiosobremesasPageModule);
    return CardapiosobremesasPageModule;
}());

//# sourceMappingURL=cardapiosobremesas.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapiosobremesasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CardapiosobremesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardapiosobremesasPage = /** @class */ (function () {
    function CardapiosobremesasPage(navCtrl, navParams, _http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._http.get('http://localhost:8080/api/sobremesas')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    }
    CardapiosobremesasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardapiosobremesasPage');
    };
    CardapiosobremesasPage.prototype.goToCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    CardapiosobremesasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardapiosobremesas',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\cardapiosobremesas\cardapiosobremesas.html"*/'<!--\n  Generated template for the CardapiosobremesasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sobremesas</ion-title>\n    <ion-buttons end="">\n			<button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n				<ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n			</span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n		</ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  >\n</ion-searchbar>\n\n<ion-content class="cards-bg">\n \n \n  <ion-card *ngFor="let produto of produtos">\n\n    <div>\n      <img class="img" src="{{produto.imagem}}"/>\n    </div>\n\n    <ion-card-content>\n      <ion-card-title>\n        {{produto.nome}}\n      </ion-card-title>\n      <p>\n        {{produto.descricao}}\n      </p>\n   \n    </ion-card-content>\n\n    <ion-row no-padding>\n      <ion-col>\n          <p class="p1">\n              R$ {{produto.preco}}\n            </p>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="danger" icon-start>\n          \n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button class="button" ion-button clear small icon-start>\n          <ion-icon name=\'cart\'></ion-icon>\n         \n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\cardapiosobremesas\cardapiosobremesas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], CardapiosobremesasPage);
    return CardapiosobremesasPage;
}());

//# sourceMappingURL=cardapiosobremesas.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function() { return CarrinhoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarrinhoPageModule = /** @class */ (function () {
    function CarrinhoPageModule() {
    }
    CarrinhoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__carrinho__["a" /* CarrinhoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__carrinho__["a" /* CarrinhoPage */]),
            ],
        })
    ], CarrinhoPageModule);
    return CarrinhoPageModule;
}());

//# sourceMappingURL=carrinho.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriamassasPageModule", function() { return CategoriamassasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoriamassas__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoriamassasPageModule = /** @class */ (function () {
    function CategoriamassasPageModule() {
    }
    CategoriamassasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categoriamassas__["a" /* CategoriamassasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categoriamassas__["a" /* CategoriamassasPage */]),
            ],
        })
    ], CategoriamassasPageModule);
    return CategoriamassasPageModule;
}());

//# sourceMappingURL=categoriamassas.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriamassasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pizzassalgadas_pizzassalgadas__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pizzasdoces_pizzasdoces__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crepes_crepes__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__espaguetes_espaguetes__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CategoriamassasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriamassasPage = /** @class */ (function () {
    function CategoriamassasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CategoriamassasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriamassasPage');
    };
    CategoriamassasPage.prototype.goToPizzasSalgadas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pizzassalgadas_pizzassalgadas__["a" /* PizzassalgadasPage */]);
    };
    CategoriamassasPage.prototype.goToPizzasDoces = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pizzasdoces_pizzasdoces__["a" /* PizzasdocesPage */]);
    };
    CategoriamassasPage.prototype.goToCrepes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__crepes_crepes__["a" /* CrepesPage */]);
    };
    CategoriamassasPage.prototype.goToEspaguetes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__espaguetes_espaguetes__["a" /* EspaguetesPage */]);
    };
    CategoriamassasPage.prototype.goToCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    CategoriamassasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoriamassas',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\categoriamassas\categoriamassas.html"*/'<!--\n  Generated template for the CategoriamassasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Categorias</ion-title>\n    <ion-buttons end="">\n			<button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n				<ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n			</span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n    </ion-buttons>\n    \n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n\n<ion-searchbar\n[(ngModel)]="myInput"\n[showCancelButton]="shouldShowCancel"\n>\n</ion-searchbar>\n\n<ion-content class="card-background-page">\n  <ion-card>\n    <img src="../assets/pizzasalgada.jpg" (click) = "goToPizzasSalgadas()"/>\n    <div class="card-title">Pizzas Salgadas</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/pizzadoce.jpg" (click) = "goToPizzasDoces()"/>\n    <div class="card-title">Pizzas Doces</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/espagueti.jpg" (click) = "goToEspaguetes()"/>\n    <div class="card-title">Espaguetes</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/crepe.jpg" (click) = "goToCrepes()"/>\n    <div class="card-title">Crepes</div>\n  </ion-card>\n\n</ion-content>\n</ion-content>\n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\categoriamassas\categoriamassas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CategoriamassasPage);
    return CategoriamassasPage;
}());

//# sourceMappingURL=categoriamassas.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzassalgadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PizzassalgadasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PizzassalgadasPage = /** @class */ (function () {
    function PizzassalgadasPage(navCtrl, navParams, _http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._http.get('/ws/pizza/salgadas')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    }
    PizzassalgadasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PizzassalgadasPage');
    };
    PizzassalgadasPage.prototype.goToCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    PizzassalgadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pizzassalgadas',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\pizzassalgadas\pizzassalgadas.html"*/'<!--\n  Generated template for the PizzassalgadasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pizzas Salgadas</ion-title>\n    <ion-buttons end="">\n        <button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n          <ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n        </span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    >\n  </ion-searchbar>\n  \n  <ion-content class="cards-bg">\n   \n   \n    <ion-card *ngFor="let produto of produtos">\n  \n      <div>\n        <img class="img" src="{{produto.imagem}}"/>\n      </div>\n  \n      <ion-card-content>\n        <ion-card-title>\n          {{produto.nome}}\n        </ion-card-title>\n        <p>\n          {{produto.descricao}}\n        </p>\n\n        <!--<ion-item>\n      <ion-label>Tamanho</ion-label>\n      <ion-select [(ngModel)]="tamanho" interface="popover">\n        <ion-option value="nes">Pequena</ion-option>\n        <ion-option value="n64">Média</ion-option>\n        <ion-option value="ps">Grande</ion-option>\n      </ion-select>\n    </ion-item>-->\n       \n      </ion-card-content>\n  \n      <ion-row no-padding>\n        <ion-col>\n            <p class="p1">\n                R$ {{produto.preco}}\n              </p>\n        </ion-col>\n        <ion-col text-center>\n          <button ion-button clear small color="danger" icon-start>\n            \n          </button>\n        </ion-col>\n        <ion-col text-right>\n          <button class="button" ion-button clear small icon-start>\n            <ion-icon name=\'cart\'></ion-icon>\n           \n          </button>\n        </ion-col>\n      </ion-row>\n  \n    </ion-card>\n  \n  \n  \n  </ion-content>\n  \n  </ion-content>\n  \n  \n  \n  \n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\pizzassalgadas\pizzassalgadas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PizzassalgadasPage);
    return PizzassalgadasPage;
}());

//# sourceMappingURL=pizzassalgadas.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzasdocesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PizzasdocesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PizzasdocesPage = /** @class */ (function () {
    function PizzasdocesPage(navCtrl, navParams, _http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
    }
    PizzasdocesPage.prototype.listaPizzas = function () {
        var _this = this;
        this._http.get('/ws/pizza/doces')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    };
    PizzasdocesPage.prototype.localizarPizza = function () {
        // Reset items back to all of the items
        this.pizzas = Array.of(this.listaPizzas());
        // set val to the value of the ev target
        var sabor = this.txtSabor;
        // if the value is an empty string don't filter the items
        if (sabor && sabor.trim() != '') {
            this.pizzas = this.pizzas.filter(function (pizza) {
                return (pizza.toLowerCase().indexOf(sabor.toLowerCase()) > -1);
            });
        }
    };
    PizzasdocesPage.prototype.ionViewDidLoad = function () {
        this.listaPizzas();
    };
    PizzasdocesPage.prototype.goToCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    PizzasdocesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pizzasdoces',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\pizzasdoces\pizzasdoces.html"*/'<!--\n  Generated template for the PizzasdocesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Pizzas Doces</ion-title>\n    <ion-buttons end="">\n        <button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n          <ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n        </span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-searchbar\n    (ionInput)="localizarPizza()" [(ngModel)] = "txtSabor"\n    [showCancelButton]="shouldShowCancel" (enter)="localizarPizza()">\n  </ion-searchbar>\n  \n  <ion-content class="cards-bg">\n   \n   \n    <ion-card *ngFor="let produto of produtos">\n  \n      <div>\n        <img class="img" src="/ws/fotos/{{produto.imagem}}"/>\n      </div>\n  \n      <ion-card-content>\n        <ion-card-title>\n          {{produto.nome}}\n        </ion-card-title>\n        <p>\n          {{produto.descricao}}\n        </p>\n\n         <!--<ion-item>\n      <ion-label>Tamanho</ion-label>\n      <ion-select [(ngModel)]="tamanho" interface="popover">\n        <ion-option value="nes">Pequena</ion-option>\n        <ion-option value="n64">Média</ion-option>\n        <ion-option value="ps">Grande</ion-option>\n      </ion-select>\n    </ion-item>-->\n      \n      </ion-card-content>\n  \n      <ion-row no-padding>\n        <ion-col>\n            <p class="p1">\n                R$ {{produto.preco}}\n              </p>\n        </ion-col>\n        <ion-col text-center>\n          <button ion-button clear small color="danger" icon-start>\n            \n          </button>\n        </ion-col>\n        <ion-col text-right>\n          <button class="button" ion-button clear small icon-start>\n            <ion-icon name=\'cart\'></ion-icon>\n           \n          </button>\n        </ion-col>\n      </ion-row>\n  \n    </ion-card>\n  \n  \n  \n  </ion-content>\n  \n  </ion-content>\n  \n  \n  \n  \n\n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\pizzasdoces\pizzasdoces.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], PizzasdocesPage);
    return PizzasdocesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=pizzasdoces.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrepesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CrepesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrepesPage = /** @class */ (function () {
    function CrepesPage(navCtrl, navParams, _http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._http.get('http://localhost:8080/api/crepes')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    }
    CrepesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrepesPage');
    };
    CrepesPage.prototype.goToCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    CrepesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crepes',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\crepes\crepes.html"*/'<!--\n  Generated template for the CrepesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Crepes</ion-title>\n    <ion-buttons end="">\n        <button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n          <ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n        </span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    >\n  </ion-searchbar>\n  \n  <ion-content class="cards-bg">\n   \n   \n    <ion-card *ngFor="let produto of produtos">\n  \n      <div>\n        <img class="img" src="{{produto.imagem}}"/>\n      </div>\n  \n      <ion-card-content>\n        <ion-card-title>\n          {{produto.nome}}\n        </ion-card-title>\n        <p>\n          {{produto.descricao}}\n        </p>\n       \n      </ion-card-content>\n  \n      <ion-row no-padding>\n        <ion-col>\n            <p class="p1">\n                R$ {{produto.preco}}\n              </p>\n        </ion-col>\n        <ion-col text-center>\n          <button ion-button clear small color="danger" icon-start>\n            \n          </button>\n        </ion-col>\n        <ion-col text-right>\n          <button class="button" ion-button clear small icon-start>\n            <ion-icon name=\'cart\'></ion-icon>\n           \n          </button>\n        </ion-col>\n      </ion-row>\n  \n    </ion-card>\n  \n  \n  \n  </ion-content>\n  \n  </ion-content>\n  \n  \n  \n  \n\n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\crepes\crepes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], CrepesPage);
    return CrepesPage;
}());

//# sourceMappingURL=crepes.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspaguetesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EspaguetesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EspaguetesPage = /** @class */ (function () {
    function EspaguetesPage(navCtrl, navParams, _http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this._http.get('/ws/espaguetes')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    }
    EspaguetesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EspaguetesPage');
    };
    EspaguetesPage.prototype.goToCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    EspaguetesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-espaguetes',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\espaguetes\espaguetes.html"*/'<!--\n  Generated template for the EspaguetesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Espaguetes</ion-title>\n    <ion-buttons end="">\n        <button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n          <ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n        </span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    >\n  </ion-searchbar>\n  \n  <ion-content class="cards-bg">\n   \n   \n    <ion-card *ngFor="let produto of produtos">\n  \n      <div>\n        <img class="img" src="{{produto.imagem}}"/>\n      </div>\n  \n      <ion-card-content>\n        <ion-card-title>\n          {{produto.nome}}\n        </ion-card-title>\n        <p>\n          {{produto.descricao}}\n        </p>\n        \n      </ion-card-content>\n  \n      <ion-row no-padding>\n        <ion-col>\n            <p class="p1">\n                R$ {{produto.preco}}\n              </p>\n        </ion-col>\n        <ion-col text-center>\n          <button ion-button clear small color="danger" icon-start>\n            \n          </button>\n        </ion-col>\n        <ion-col text-right>\n          <button class="button" ion-button clear small icon-start>\n            <ion-icon name=\'cart\'></ion-icon>\n           \n          </button>\n        </ion-col>\n      </ion-row>\n  \n    </ion-card>\n  \n  \n  \n  </ion-content>\n  \n  </ion-content>\n  \n  \n  \n  \n\n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\espaguetes\espaguetes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], EspaguetesPage);
    return EspaguetesPage;
}());

//# sourceMappingURL=espaguetes.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrepesPageModule", function() { return CrepesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crepes__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CrepesPageModule = /** @class */ (function () {
    function CrepesPageModule() {
    }
    CrepesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__crepes__["a" /* CrepesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__crepes__["a" /* CrepesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], CrepesPageModule);
    return CrepesPageModule;
}());

//# sourceMappingURL=crepes.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspaguetesPageModule", function() { return EspaguetesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__espaguetes__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EspaguetesPageModule = /** @class */ (function () {
    function EspaguetesPageModule() {
    }
    EspaguetesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__espaguetes__["a" /* EspaguetesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__espaguetes__["a" /* EspaguetesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], EspaguetesPageModule);
    return EspaguetesPageModule;
}());

//# sourceMappingURL=espaguetes.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu__["a" /* MenuPage */]),
            ],
        })
    ], MenuPageModule);
    return MenuPageModule;
}());

//# sourceMappingURL=menu.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardapiobebidas_cardapiobebidas__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoriamassas_categoriamassas__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cardapiosobremesas_cardapiosobremesas__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.goToBebidas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cardapiobebidas_cardapiobebidas__["a" /* CardapiobebidasPage */]);
    };
    MenuPage.prototype.goToCategorias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categoriamassas_categoriamassas__["a" /* CategoriamassasPage */]);
    };
    MenuPage.prototype.goToSobremesas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cardapiosobremesas_cardapiosobremesas__["a" /* CardapiosobremesasPage */]);
    };
    MenuPage.prototype.goToCarrinho = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__["a" /* CarrinhoPage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\menu\menu.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Menu</ion-title>\n   <ion-buttons end="">\n			<button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n				<ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n			</span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n		</ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <ion-card>\n    <img src="../assets/massas.jpg" (click) = "goToCategorias()"/>\n    <div class="card-title">Massas</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/bebidas.jpg" (click) = "goToBebidas()"/>\n    <div class="card-title">Bebidas</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="../assets/sobremesa.jpg" (click) = "goToSobremesas()"/>\n    <div class="card-title">Sobremesas</div>\n  </ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasdocesPageModule", function() { return PizzasdocesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pizzasdoces__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PizzasdocesPageModule = /** @class */ (function () {
    function PizzasdocesPageModule() {
    }
    PizzasdocesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pizzasdoces__["a" /* PizzasdocesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pizzasdoces__["a" /* PizzasdocesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], PizzasdocesPageModule);
    return PizzasdocesPageModule;
}());

//# sourceMappingURL=pizzasdoces.module.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzassalgadasPageModule", function() { return PizzassalgadasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pizzassalgadas__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PizzassalgadasPageModule = /** @class */ (function () {
    function PizzassalgadasPageModule() {
    }
    PizzassalgadasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__pizzassalgadas__["a" /* PizzassalgadasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__pizzassalgadas__["a" /* PizzassalgadasPage */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
        })
    ], PizzassalgadasPageModule);
    return PizzassalgadasPageModule;
}());

//# sourceMappingURL=pizzassalgadas.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentNumber = 0;
    }
    CarrinhoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrinhoPage');
    };
    CarrinhoPage.prototype.increment = function () {
        this.currentNumber++;
    };
    CarrinhoPage.prototype.decrement = function () {
        this.currentNumber--;
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\pages\carrinho\carrinho.html"*/'<!--\n  Generated template for the CarrinhoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Carrinho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n  <ion-content>\n    <ion-list>\n\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="../assets/calabresa.jpg">\n          </ion-thumbnail>\n          <h2>Pizza de Calabresa</h2>\n          <p>R$ 20,00</p>\n          <p>Tamanho</p>\n          <ion-row>\n          <ion-buttons>\n              <button class="button1" icon-only="" ion-button="" (click)="decrement()"> \n                <ion-icon  name="remove-circle" ></ion-icon>\n              </button>\n            </ion-buttons>\n            <p class="p1">{{currentNumber}}</p>\n            <ion-buttons>\n                <button class="button2" icon-only="" ion-button="" (click)="increment()">\n                  <ion-icon name="add-circle" ></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-row>\n        </ion-item> \n\n        \n          \n        \n    \n      </ion-list>\n    \n    </ion-content>\n\n        <ion-footer class="footer">\n            <p class="p2">Total: R$ 20,00</p>\n          <button class="b" ion-button full>Checkout</button>\n        </ion-footer>\n     \n  '/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\pages\carrinho\carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cardapiobebidas_cardapiobebidas_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cardapiosobremesas_cardapiosobremesas_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categoriamassas_categoriamassas_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pizzassalgadas_pizzassalgadas_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pizzasdoces_pizzasdoces_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_crepes_crepes_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_espaguetes_espaguetes_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_carrinho_carrinho_module__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cardapiobebidas/cardapiobebidas.module#CardapiobebidasPageModule', name: 'CardapiobebidasPage', segment: 'cardapiobebidas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cardapiosobremesas/cardapiosobremesas.module#CardapiosobremesasPageModule', name: 'CardapiosobremesasPage', segment: 'cardapiosobremesas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule', name: 'CarrinhoPage', segment: 'carrinho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categoriamassas/categoriamassas.module#CategoriamassasPageModule', name: 'CategoriamassasPage', segment: 'categoriamassas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/crepes/crepes.module#CrepesPageModule', name: 'CrepesPage', segment: 'crepes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/espaguetes/espaguetes.module#EspaguetesPageModule', name: 'EspaguetesPage', segment: 'espaguetes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pizzasdoces/pizzasdoces.module#PizzasdocesPageModule', name: 'PizzasdocesPage', segment: 'pizzasdoces', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pizzassalgadas/pizzassalgadas.module#PizzassalgadasPageModule', name: 'PizzassalgadasPage', segment: 'pizzassalgadas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resultadobusca/resultadobusca.module#ResultadobuscaPageModule', name: 'ResultadobuscaPage', segment: 'resultadobusca', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu_module__["MenuPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_cardapiosobremesas_cardapiosobremesas_module__["CardapiosobremesasPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_categoriamassas_categoriamassas_module__["CategoriamassasPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_pizzassalgadas_pizzassalgadas_module__["PizzassalgadasPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_pizzasdoces_pizzasdoces_module__["PizzasdocesPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_crepes_crepes_module__["CrepesPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_carrinho_carrinho_module__["CarrinhoPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_espaguetes_espaguetes_module__["EspaguetesPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_cardapiobebidas_cardapiobebidas_module__["CardapiobebidasPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__["a" /* MenuPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\51118502017.1\projetofinal\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\51118502017.1\projetofinal\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map