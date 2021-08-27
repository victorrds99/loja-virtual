import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  produtos: Produto[] = [
    new Produto(1, 'Gol Quadrado GTS 1.8', 40000, ['gol-quadrado4.jpg'], this.getDescricao()),

    new Produto(2, 'Gol Quadrado GTS 1.6', 30000, ['gol-quadrado3.jpg'], this.getDescricao()),

    new Produto(3, 'Gol Quadrado GT 1.6', 20000, ['gol-quadrado2.jpg'], this.getDescricao()),

    new Produto(4, 'Gol Quadrado CL 1.0', 10000, ['gol-quadrado6.jpg'], this.getDescricao()), 

    new Produto(5, 'Gol Quadrado GT 1.6', 25000, ['gol-quadrado.jpg'], this.getDescricao()),

    new Produto(6, 'Gol Quadrado GT 1.8', 35000, ['gol-quadrado5.jpg'], this.getDescricao()),

  ];
  /* 
  produtos: Produto[] = [
    new Produto(
      1,
      'Pc Gamer Level One Amd Ryzen 5 3400g / 16gb Ddr4 / Hd 1tb',
      4200.15,
      ['pc1.jpeg'],
      []
    ),
    new Produto(
      2,
      'Pc Gamer Viniccius 13 Intel I7 10700 / 16gb Rgb / Ssd 512g / Water Cooler 240 / Rtx 3070',
      19133.27,
      ['pc2.jpg'],
      []
    ),
    new Produto(
      3,
      'Pc Gamer Level One Amd Ryzen 5 3400g / 8gb Ddr4 / Hd 1tb',
      3864.99,
      ['pc3.jpeg'],
      []
    ),
    new Produto(
      4,
      'Pc Gamer Redstone White Intel I3 10100 16gb Rx550 Chp0313',
      4231.17,
      ['pc4.jpeg'],
      []
    ),
  ];
*/
  

  constructor() { }

  listarTodos(): Produto[] {
    return this.produtos;
  }
  
  listarId(id: number): Produto | undefined {
    return this.produtos.find(produto => produto.id === id);
  }

  private getDescricao(): string[] {
    return [
      'Ano de fabricação: 1990. motor AP, zerooooo!'
    ];
  }

}
