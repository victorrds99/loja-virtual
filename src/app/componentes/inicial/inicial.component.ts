import { Produto } from './../../models/produto.model';
import { ProdutoService } from './../../servicos/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.listarTodos();
  }

}
