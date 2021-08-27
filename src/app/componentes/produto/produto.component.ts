import { CarrinhoService } from './../../servicos/carrinho.service';
import { ProdutoService } from './../../servicos/produto.service';
import { Produto } from './../../models/produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto | undefined;


  constructor(
    private route: ActivatedRoute, 
    private produtoService: ProdutoService,
    private router: Router,
    private carrinhoService: CarrinhoService
              ) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.produto = this.produtoService.listarId(+routeParams.id);
    })
  }

  adicionarCarrinho(){
    if(!this.produto){
      return;
    }
    this.carrinhoService.adicionar(this.produto)
    this.router.navigate(['/carrinho']);
  }

}
