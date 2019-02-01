webpackJsonp([2],{

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cardapiobebidas/cardapiobebidas.module": [
		159
	],
	"../pages/cardapiosobremesas/cardapiosobremesas.module": [
		157
	],
	"../pages/carrinho/carrinho.module": [
		161
	],
	"../pages/categoriamassas/categoriamassas.module": [
		162
	],
	"../pages/checkout/checkout.module": [
		294,
		1
	],
	"../pages/crepes/crepes.module": [
		168
	],
	"../pages/espaguetes/espaguetes.module": [
		169
	],
	"../pages/menu/menu.module": [
		170
	],
	"../pages/pizzasdoces/pizzasdoces.module": [
		172
	],
	"../pages/pizzassalgadas/pizzassalgadas.module": [
		173
	],
	"../pages/resultadobusca/resultadobusca.module": [
		295,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(22);
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
    function CardapiosobremesasPage(navCtrl, navParams, _http, cartService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.cartService = cartService;
        this._http.get('/ws/sobremesas')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    }
    CardapiosobremesasPage.prototype.ionViewDidLoad = function () { };
    CardapiosobremesasPage.prototype.addToCart = function (produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.push('CarrinhoPage');
    };
    CardapiosobremesasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardapiosobremesas',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\cardapiosobremesas\cardapiosobremesas.html"*/'<!--\n\n  Generated template for the CardapiosobremesasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sobremesas</ion-title>\n\n    <ion-buttons end="">\n\n			<button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n\n				<ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n\n			</span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n\n		</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-searchbar\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  >\n\n</ion-searchbar>\n\n\n\n<ion-content class="cards-bg">\n\n \n\n \n\n  <ion-card *ngFor="let produto of produtos">\n\n\n\n    <div>\n\n      <img class="img" src="/ws/fotos/{{produto.imagem}}"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{produto.nome}}\n\n      </ion-card-title>\n\n      <p>\n\n        {{produto.descricao}}\n\n      </p>\n\n   \n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n          <p class="p1">\n\n              R$ {{produto.preco}}\n\n            </p>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          \n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button class="button" ion-button clear small icon-start (click)="addToCart(produto)">\n\n          <ion-icon name=\'cart\'></ion-icon>\n\n         \n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\cardapiosobremesas\cardapiosobremesas.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]])
    ], CardapiosobremesasPage);
    return CardapiosobremesasPage;
}());

//# sourceMappingURL=cardapiosobremesas.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardapiobebidasPageModule", function() { return CardapiobebidasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cardapiobebidas__ = __webpack_require__(160);
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardapiobebidasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(22);
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
    function CardapiobebidasPage(navCtrl, navParams, _http, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.cartService = cartService;
        this._http.get("ws/listBebidas")
            .subscribe(function (produtos) {
            //this.produtos = produtos;
            console.log(produtos);
        });
    }
    CardapiobebidasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardapiobebidasPage');
    };
    CardapiobebidasPage.prototype.addToCart = function (produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.push('CarrinhoPage');
    };
    CardapiobebidasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cardapiobebidas',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\cardapiobebidas\cardapiobebidas.html"*/'<!--\n\n  Generated template for the CardapiobebidasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Bebidas</ion-title>\n\n    <ion-buttons end="">\n\n			<button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n\n				<ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n\n			</span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n\n		</ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-searchbar\n\n  [(ngModel)]="myInput"\n\n  [showCancelButton]="shouldShowCancel"\n\n  >\n\n</ion-searchbar>\n\n\n\n<ion-content class="cards-bg">\n\n \n\n \n\n  <ion-card *ngFor="let produto of produtos">\n\n\n\n    <div>\n\n      <img class="img" src="/ws/fotos/{{produto.imagem}}"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{produto.nome}}\n\n      </ion-card-title>\n\n      <p>\n\n        {{produto.descricao}}\n\n      </p>\n\n\n\n      <!-- <ion-item>\n\n      <ion-label>{{produto.descricao}}</ion-label>\n\n      <ion-select [(ngModel)]="tamanho" interface="popover">\n\n        <ion-option value="nes">350 ml</ion-option>\n\n        <ion-option value="n64">600 ml</ion-option>\n\n        <ion-option value="ps">2 L</ion-option>\n\n      </ion-select>\n\n    </ion-item>-->\n\n      \n\n    </ion-card-content>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n          <p class="p1">\n\n              R$ {{produto.preco}}\n\n            </p>\n\n      </ion-col>\n\n      <ion-col text-center>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          \n\n        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button class="button" ion-button clear small icon-start (click)="addToCart(produto)">\n\n          <ion-icon name=\'cart\'></ion-icon>\n\n         \n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\cardapiobebidas\cardapiobebidas.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]])
    ], CardapiobebidasPage);
    return CardapiobebidasPage;
}());

//# sourceMappingURL=cardapiobebidas.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrinhoPageModule", function() { return CarrinhoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carrinho__ = __webpack_require__(80);
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriamassasPageModule", function() { return CategoriamassasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoriamassas__ = __webpack_require__(163);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriamassasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pizzassalgadas_pizzassalgadas__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pizzasdoces_pizzasdoces__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crepes_crepes__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__espaguetes_espaguetes__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carrinho_carrinho__ = __webpack_require__(80);
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
            selector: 'page-categoriamassas',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\categoriamassas\categoriamassas.html"*/'<!--\n\n  Generated template for the CategoriamassasPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Categorias</ion-title>\n\n    <ion-buttons end="">\n\n			<button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n\n				<ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n\n			</span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n<ion-searchbar\n\n[(ngModel)]="myInput"\n\n[showCancelButton]="shouldShowCancel"\n\n>\n\n</ion-searchbar>\n\n\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n\n    <img src="../assets/pizzasalgada.jpg" (click) = "goToPizzasSalgadas()"/>\n\n    <div class="card-title">Pizzas Salgadas</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="../assets/pizzadoce.jpg" (click) = "goToPizzasDoces()"/>\n\n    <div class="card-title">Pizzas Doces</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="../assets/espagueti.jpg" (click) = "goToEspaguetes()"/>\n\n    <div class="card-title">Espaguetes</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="../assets/crepe.jpg" (click) = "goToCrepes()"/>\n\n    <div class="card-title">Crepes</div>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\categoriamassas\categoriamassas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CategoriamassasPage);
    return CategoriamassasPage;
}());

//# sourceMappingURL=categoriamassas.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzassalgadasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(22);
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
    function PizzassalgadasPage(navCtrl, navParams, _http, cartService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.cartService = cartService;
        this._http.get('/ws/pizza/salgadas')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    }
    PizzassalgadasPage.prototype.ionViewDidLoad = function () { };
    PizzassalgadasPage.prototype.addToCart = function (produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.push('CarrinhoPage');
    };
    PizzassalgadasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pizzassalgadas',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\pizzassalgadas\pizzassalgadas.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Pizzas Salgadas</ion-title>\n\n    <ion-buttons end="">\n\n        <button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n\n          <ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n\n        </span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-searchbar\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    >\n\n  </ion-searchbar>\n\n  \n\n  <ion-content class="cards-bg">\n\n   \n\n   \n\n    <ion-card *ngFor="let produto of produtos">\n\n  \n\n      <div>\n\n        <img class="img" src="/ws/fotos/{{produto.imagem}}"/>\n\n      </div>\n\n  \n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          {{produto.nome}}\n\n        </ion-card-title>\n\n        <p>\n\n          {{produto.descricao}}\n\n        </p>\n\n\n\n        <!--<ion-item>\n\n      <ion-label>Tamanho</ion-label>\n\n      <ion-select [(ngModel)]="tamanho" interface="popover">\n\n        <ion-option value="nes">Pequena</ion-option>\n\n        <ion-option value="n64">Média</ion-option>\n\n        <ion-option value="ps">Grande</ion-option>\n\n      </ion-select>\n\n    </ion-item>-->\n\n       \n\n      </ion-card-content>\n\n  \n\n      <ion-row no-padding>\n\n        <ion-col>\n\n            <p class="p1">\n\n                R$ {{produto.preco}}\n\n              </p>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <button ion-button clear small color="danger" icon-start></button>\n\n        </ion-col>\n\n        <ion-col text-right>\n\n          <button class="button" ion-button clear small icon-start (click)="addToCart(produto)">\n\n            <ion-icon name=\'cart\'></ion-icon>\n\n           \n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n    </ion-card>\n\n  \n\n  \n\n  \n\n  </ion-content>\n\n  \n\n  </ion-content>\n\n  \n\n  \n\n  \n\n  \n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\pizzassalgadas\pizzassalgadas.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]])
    ], PizzassalgadasPage);
    return PizzassalgadasPage;
}());

//# sourceMappingURL=pizzassalgadas.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PizzasdocesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(22);
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
    function PizzasdocesPage(navCtrl, navParams, _http, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.cartService = cartService;
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
    PizzasdocesPage.prototype.addToCart = function (produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.push('CarrinhoPage');
    };
    PizzasdocesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pizzasdoces',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\pizzasdoces\pizzasdoces.html"*/'<!--\n\n  Generated template for the PizzasdocesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Pizzas Doces</ion-title>\n\n    <ion-buttons end="">\n\n        <button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n\n          <ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n\n        </span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-searchbar\n\n    (ionInput)="localizarPizza()" [(ngModel)] = "txtSabor"\n\n    [showCancelButton]="shouldShowCancel" (enter)="localizarPizza()">\n\n  </ion-searchbar>\n\n  \n\n  <ion-content class="cards-bg">\n\n   \n\n   \n\n    <ion-card *ngFor="let produto of produtos">\n\n  \n\n      <div>\n\n        <img class="img" src="/ws/fotos/{{produto.imagem}}"/>\n\n      </div>\n\n  \n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          {{produto.nome}}\n\n        </ion-card-title>\n\n        <p>\n\n          {{produto.descricao}}\n\n        </p>\n\n\n\n         <!--<ion-item>\n\n      <ion-label>Tamanho</ion-label>\n\n      <ion-select [(ngModel)]="tamanho" interface="popover">\n\n        <ion-option value="nes">Pequena</ion-option>\n\n        <ion-option value="n64">Média</ion-option>\n\n        <ion-option value="ps">Grande</ion-option>\n\n      </ion-select>\n\n    </ion-item>-->\n\n      \n\n      </ion-card-content>\n\n  \n\n      <ion-row no-padding>\n\n        <ion-col>\n\n            <p class="p1">\n\n                R$ {{produto.preco}}\n\n              </p>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <button ion-button clear small color="danger" icon-start>\n\n            \n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-right>\n\n          <button class="button" ion-button clear small icon-start (click)="addToCart(produto)">\n\n            <ion-icon name=\'cart\'></ion-icon>\n\n           \n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n    </ion-card>\n\n  \n\n  \n\n  \n\n  </ion-content>\n\n  \n\n  </ion-content>\n\n  \n\n  \n\n  \n\n  \n\n\n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\pizzasdoces\pizzasdoces.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]])
    ], PizzasdocesPage);
    return PizzasdocesPage;
}());

//# sourceMappingURL=pizzasdoces.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrepesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(22);
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
    function CrepesPage(navCtrl, navParams, _http, cartService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.cartService = cartService;
        this._http.get('/ws/crepes')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    }
    CrepesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrepesPage');
    };
    CrepesPage.prototype.addToCart = function (produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.push('CarrinhoPage');
    };
    CrepesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crepes',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\crepes\crepes.html"*/'<!--\n\n  Generated template for the CrepesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Crepes</ion-title>\n\n    <ion-buttons end="">\n\n        <button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n\n          <ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n\n        </span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-searchbar\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    >\n\n  </ion-searchbar>\n\n  \n\n  <ion-content class="cards-bg">\n\n   \n\n   \n\n    <ion-card *ngFor="let produto of produtos">\n\n  \n\n      <div>\n\n        <img class="img" src="/ws/fotos/{{produto.imagem}}"/>\n\n      </div>\n\n  \n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          {{produto.nome}}\n\n        </ion-card-title>\n\n        <p>\n\n          {{produto.descricao}}\n\n        </p>\n\n       \n\n      </ion-card-content>\n\n  \n\n      <ion-row no-padding>\n\n        <ion-col>\n\n            <p class="p1">\n\n                R$ {{produto.preco}}\n\n              </p>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <button ion-button clear small color="danger" icon-start>\n\n            \n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-right>\n\n          <button class="button" ion-button clear small icon-start (click)="addToCart(produto)">\n\n            <ion-icon name=\'cart\'></ion-icon>\n\n           \n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n    </ion-card>\n\n  \n\n  \n\n  \n\n  </ion-content>\n\n  \n\n  </ion-content>\n\n  \n\n  \n\n  \n\n  \n\n\n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\crepes\crepes.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]])
    ], CrepesPage);
    return CrepesPage;
}());

//# sourceMappingURL=crepes.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EspaguetesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cart_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(22);
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
    function EspaguetesPage(navCtrl, navParams, _http, cartService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._http = _http;
        this.cartService = cartService;
        this._http.get('/ws/espaguetes')
            .subscribe(function (produtos) {
            _this.produtos = produtos;
        });
    }
    EspaguetesPage.prototype.ionViewDidLoad = function () {
    };
    EspaguetesPage.prototype.addToCart = function (produto) {
        this.cartService.addProduto(produto);
        this.navCtrl.push('CarrinhoPage');
    };
    EspaguetesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-espaguetes',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\espaguetes\espaguetes.html"*/'<!--\n\n  Generated template for the EspaguetesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Espaguetes</ion-title>\n\n    <ion-buttons end="">\n\n        <button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n\n          <ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n\n        </span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-searchbar\n\n    [(ngModel)]="myInput"\n\n    [showCancelButton]="shouldShowCancel"\n\n    >\n\n  </ion-searchbar>\n\n  \n\n  <ion-content class="cards-bg">\n\n   \n\n   \n\n    <ion-card *ngFor="let produto of produtos">\n\n  \n\n      <div>\n\n        <img class="img" src="/ws/fotos/{{produto.imagem}}"/>\n\n      </div>\n\n  \n\n      <ion-card-content>\n\n        <ion-card-title>\n\n          {{produto.nome}}\n\n        </ion-card-title>\n\n        <p>\n\n          {{produto.descricao}}\n\n        </p>\n\n        \n\n      </ion-card-content>\n\n  \n\n      <ion-row no-padding>\n\n        <ion-col>\n\n            <p class="p1">\n\n                R$ {{produto.preco}}\n\n              </p>\n\n        </ion-col>\n\n        <ion-col text-center>\n\n          <button ion-button clear small color="danger" icon-start>\n\n            \n\n          </button>\n\n        </ion-col>\n\n        <ion-col text-right>\n\n          <button class="button" ion-button clear small icon-start (click)="addToCart(produto)">\n\n            <ion-icon name=\'cart\'></ion-icon>\n\n           \n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n  \n\n    </ion-card>\n\n  \n\n  \n\n  \n\n  </ion-content>\n\n  \n\n  </ion-content>\n\n  \n\n  \n\n  \n\n  \n\n\n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\espaguetes\espaguetes.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_cart_service__["a" /* CartService */]])
    ], EspaguetesPage);
    return EspaguetesPage;
}());

//# sourceMappingURL=espaguetes.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrepesPageModule", function() { return CrepesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crepes__ = __webpack_require__(166);
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspaguetesPageModule", function() { return EspaguetesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__espaguetes__ = __webpack_require__(167);
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu__ = __webpack_require__(171);
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

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cardapiobebidas_cardapiobebidas__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoriamassas_categoriamassas__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cardapiosobremesas_cardapiosobremesas__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carrinho_carrinho__ = __webpack_require__(80);
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
            selector: 'page-menu',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\menu\menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Menu</ion-title>\n\n   <ion-buttons end="">\n\n			<button icon-only="" ion-button="" (click) = "goToCarrinho()"><span>\n\n				<ion-icon name="cart" role="img"  aria-label="cart" ng-reflect-name="cart"></ion-icon>\n\n			</span><div class="button-effect" style="transform: translate3d(-20px, -15px, 0px) scale(1); height: 64px; width: 64px; opacity: 0; transition: transform 260ms ease 0s, opacity 182ms ease 78ms;"></div></button>\n\n		</ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="card-background-page">\n\n  <ion-card>\n\n    <img src="../assets/massas.jpg" (click) = "goToCategorias()"/>\n\n    <div class="card-title">Massas</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="../assets/bebidas.jpg" (click) = "goToBebidas()"/>\n\n    <div class="card-title">Bebidas</div>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <img src="../assets/sobremesa.jpg" (click) = "goToSobremesas()"/>\n\n    <div class="card-title">Sobremesas</div>\n\n  </ion-card>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzasdocesPageModule", function() { return PizzasdocesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pizzasdoces__ = __webpack_require__(165);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzassalgadasPageModule", function() { return PizzassalgadasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pizzassalgadas__ = __webpack_require__(164);
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

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_storage_keys_config__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.getCart = function () {
        var cart = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_1__config_storage_keys_config__["a" /* STORAGE_KEYS */].cart);
        if (cart != null) {
            return JSON.parse(cart);
        }
        return null;
    };
    StorageService.prototype.setCart = function (obj) {
        if (obj == null) {
            localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_1__config_storage_keys_config__["a" /* STORAGE_KEYS */].cart);
        }
        else {
            localStorage.setItem(__WEBPACK_IMPORTED_MODULE_1__config_storage_keys_config__["a" /* STORAGE_KEYS */].cart, JSON.stringify(obj));
        }
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu_module__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cardapiobebidas_cardapiobebidas_module__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cardapiosobremesas_cardapiosobremesas_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_categoriamassas_categoriamassas_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_pizzassalgadas_pizzassalgadas_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pizzasdoces_pizzasdoces_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_crepes_crepes_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_espaguetes_espaguetes_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_carrinho_carrinho_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_cart_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_storage_service__ = __webpack_require__(22);
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
                        { loadChildren: '../pages/cardapiosobremesas/cardapiosobremesas.module#CardapiosobremesasPageModule', name: 'CardapiosobremesasPage', segment: 'cardapiosobremesas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cardapiobebidas/cardapiobebidas.module#CardapiobebidasPageModule', name: 'CardapiobebidasPage', segment: 'cardapiobebidas', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_8__pages_cardapiobebidas_cardapiobebidas_module__["CardapiobebidasPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_carrinho_carrinho_module__["CarrinhoPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_17__services_storage_service__["a" /* StorageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORAGE_KEYS; });
var STORAGE_KEYS = {
    localUser: "localUser",
    cart: "MeuCarrinho"
};
//# sourceMappingURL=storage_keys.config.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__storage_service__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService(storage) {
        this.storage = storage;
    }
    CartService.prototype.createOrClearCart = function () {
        var cart = { itens: [] };
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.getCart = function () {
        var cart = this.storage.getCart();
        if (cart == null) {
            cart = this.createOrClearCart();
        }
        return cart;
    };
    CartService.prototype.addProduto = function (produto) {
        var cart = this.getCart();
        var position = cart.itens.findIndex(function (x) { return x.produto.id == produto.id; });
        if (position == -1) {
            cart.itens.push({ quantidade: 1, produto: produto });
        }
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.removeProduto = function (produto) {
        var cart = this.getCart();
        var position = cart.itens.findIndex(function (x) { return x.produto.id == produto.id; });
        if (position != -1) {
            cart.itens.splice(position, 1);
        }
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.increaseQuantity = function (produto) {
        var cart = this.getCart();
        var position = cart.itens.findIndex(function (x) { return x.produto.id == produto.id; });
        if (position != -1) {
            cart.itens[position].quantidade++;
        }
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.decreaseQuantity = function (produto) {
        var cart = this.getCart();
        var position = cart.itens.findIndex(function (x) { return x.produto.id == produto.id; });
        if (position != -1) {
            cart.itens[position].quantidade--;
            if (cart.itens[position].quantidade < 1) {
                cart = this.removeProduto(produto);
            }
        }
        this.storage.setCart(cart);
        return cart;
    };
    CartService.prototype.total = function () {
        var cart = this.storage.getCart();
        var sum = 0;
        for (var i = 0; i < cart.itens.length; i++) {
            sum += cart.itens[i].produto.preco * cart.itens[i].quantidade;
        }
        return sum;
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__storage_service__["a" /* StorageService */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_menu_menu__ = __webpack_require__(171);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(22);
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
    function CarrinhoPage(navCtrl, navParams, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.currentNumber = 0;
    }
    CarrinhoPage.prototype.ionViewDidLoad = function () {
        var cart = this.cartService.getCart();
        this.itens = cart.itens;
    };
    CarrinhoPage.prototype.removeItem = function (produto) {
        this.itens = this.cartService.removeProduto(produto).itens;
    };
    CarrinhoPage.prototype.increaseQuantity = function (produto) {
        this.itens = this.cartService.increaseQuantity(produto).itens;
    };
    CarrinhoPage.prototype.decreaseQuantity = function (produto) {
        this.itens = this.cartService.decreaseQuantity(produto).itens;
    };
    CarrinhoPage.prototype.total = function () {
        return this.cartService.total();
    };
    CarrinhoPage.prototype.checkout = function () {
        this.navCtrl.setRoot('MenuPage');
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\carrinho\carrinho.html"*/'<!--\n\n  Generated template for the CarrinhoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Carrinho</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n\n\n        <ion-item *ngFor="let item of itens">\n\n          <ion-thumbnail item-start>\n\n            <img src="/ws/fotos/{{item.produto.imagem}}">\n\n          </ion-thumbnail>\n\n          <h2>{{item.produto.nome}}</h2>\n\n          <p>R${{item.produto.preco}}</p>\n\n          <p>Tamanho</p>\n\n          <ion-row>\n\n          <ion-buttons>\n\n              <button class="button1" icon-only="" ion-button="" (click)="decreaseQuantity(item.produto)"> \n\n                <ion-icon  name="remove-circle" ></ion-icon>\n\n              </button>\n\n            </ion-buttons>\n\n            <p class="p1">{{item.quantidade}}</p>\n\n            <ion-buttons>\n\n                <button class="button2" icon-only="" ion-button="" (click)="increaseQuantity(item.produto)">\n\n                  <ion-icon name="add-circle" ></ion-icon>\n\n                </button>\n\n              </ion-buttons>\n\n            </ion-row>\n\n        </ion-item> \n\n\n\n        \n\n          \n\n        \n\n    \n\n      </ion-list>\n\n    \n\n    </ion-content>\n\n\n\n        <ion-footer class="footer">\n\n          <ion-item *ngIf="total() <= 0">\n\n            <h2>Seu carrinho está vazio</h2>\n\n          </ion-item>\n\n          <span *ngIf="total() > 0">\n\n            <p class="p2">Total: R${{total()}}</p>            \n\n          </span>\n\n          <button class="b" ion-button full (click)="checkout()">Continuar Comprando</button>\n\n        </ion-footer>\n\n     \n\n  '/*ion-inline-end:"C:\Users\pedrh\OneDrive\Área de Trabalho\Projetos Git\smartestchef\src\pages\carrinho\carrinho.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map