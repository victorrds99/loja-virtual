import { CarrinhoService } from './../../servicos/carrinho.service';
import { Router } from '@angular/router';
import { Produto } from './../../models/produto.model';
import { ProdutoService } from './../../servicos/produto.service';
import { Component, OnInit } from '@angular/core';
import {
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from 'src/app/app.module';
@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})


export class InicialComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService, 
              private router: Router,
              private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.produtos = this.produtoService.listarTodos();
    
    //busca cliente por id
    onSnapshot(doc(db, 'clientes', 'clientes-tabela'), (dados) => {
      const data = dados.data();
      console.log(data.clientes)
    });
  }

  adicionarCarrinho(produto: Produto){
    this.carrinhoService.adicionar(produto);
    this.router.navigate(['/carrinho']);
  }

}
