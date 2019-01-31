import { Cart } from "./../models/cart";
import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../config/storage_keys.config";

@Injectable()
export class StorageService {

  getCart(): Cart {
    let cart = localStorage.getItem(STORAGE_KEYS.cart);
    if (cart != null) {
      return JSON.parse(cart);
    }
    return null;
  }

  setCart(obj: Cart) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.cart);
    } else {
      localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(obj));
    }
  }
}