import { Produto } from "./produto";

export interface CartItem {
    quantidade: number,
    produto: Produto
}