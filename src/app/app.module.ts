import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './componentes/inicial/inicial.component';
import { ProdutoComponent } from './componentes/produto/produto.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { CheckoutComponent } from './componentes/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    ProdutoComponent,
    CarrinhoComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
