import { Cliente } from './../servicos/checkout.service';
import { Carrinho } from './carrinho.model';

export class Pedido {

    constructor(
        public id: number,
        public data_hora: Date,
        public cliente: Cliente,
        public produtos: Carrinho[]
    ) {}
}
