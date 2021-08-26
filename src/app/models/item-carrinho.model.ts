import { Produto } from "./produto.model";

export class ItemCarrinho {
    constructor(
        public produto: Produto,
        public quantidade: number
    ) { }
}