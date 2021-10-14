import { CarrinhoService } from './../../servicos/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from 'src/app/servicos/checkout.service';
import { Cliente } from '../../servicos/checkout.service'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],

})
export class CheckoutComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required]], 
    email: ['',[Validators.required, Validators.email]],
    cpf: ['', [Validators.required]],
    endereco: ['', [Validators.required]],
    cep:['',[Validators.required]],
    cidade:['',[Validators.required]],
    estado:['',[Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private carrinhoService: CarrinhoService,
    private checkout : CheckoutService) { }

  ngOnInit(): void {
  }

  pagar() {
    const cliente = this.pegarValoresForm(); 
    this.checkout.saveClient(cliente).subscribe(() => {
      console.log('sucesso'); 
    })
    alert(JSON.stringify(this.form.value));
  }
 pegarValoresForm () : Cliente{
  return {
    nome: this.form.get('nome')?.value,
    email: this.form.get('email')?.value,
    cpf: this.form.get('cpf')?.value,
    endereco: this.form.get('endereco')?.value,
    cep: this.form.get('cep')?.value,
    cidade: this.form.get('cidade')?.value,
    estado: this.form.get('estado')?.value
  }
 }

  get itens() {
    return this.carrinhoService.itens;
  }

  get total() {
    return this.carrinhoService.total;
  }


}
