import { CarrinhoService } from './../../servicos/carrinho.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckoutService } from 'src/app/servicos/checkout.service';
import { Cliente } from '../../servicos/checkout.service';
import {
  collection,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  onSnapshot,
  deleteDoc,
} from 'firebase/firestore';
import { auth, db } from 'src/app/app.module';
import {
  signInWithEmailAndPassword, sendPasswordResetEmail, setPersistence, browserLocalPersistence,
} from 'firebase/auth';
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

  async salvar() {
    const cliente = this.pegarValoresForm(); 
    // this.checkout.saveClient(this.form.value).subscribe(() => {
      
    //   console.log('sucesso'); 
    // })
    // const docRef = doc(db, 'clientes', '1');
    await signInWithEmailAndPassword(auth, 'victor@teste.com', '1234567');
    const docRef = doc(db, 'clientes', 'clientes-tabela');
      const docSnap = await getDoc(docRef);
    const checkInnRef = collection(db, 'clientes');
    if(!docSnap.data()) {
      await setDoc(doc(checkInnRef, 'clientes-tabela'), {
        clientes: [{
          id: 7,
          nome: 'nome2',
          email: 'test2e@hotmail.com',
          cpf: "045.505.404-10",
          cep: '04444-000',
          cidade: 'Sao paulo',
          estado: 'SP'
        }],
      });
    }
    const checkInnRef2 = doc(db, 'clientes', 'clientes-tabela');
    await updateDoc(checkInnRef2, {
      clientes: arrayUnion({
        id: 7,
        nome: 'nome2',
        email: 'test2e@hotmail.com',
        cpf: "045.505.404-10",
        cep: '04444-000',
        cidade: 'Sao paulo',
        estado: 'SP'
      }),
    });
    
    alert(JSON.stringify(this.form.value));

    this.checkout.writeUserData(
      this.form.get('nome')?.value,
      this.form.get('email')?.value,
      this.form.get('cpf')?.value,
      this.form.get('endereco')?.value,
      this.form.get('cep')?.value,
      this.form.get('cidade')?.value,
      this.form.get('estado')?.value
    );
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
