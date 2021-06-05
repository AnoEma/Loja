import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { Produto } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  produto: Produto = {
    nome: null,
    categoria: null,
    preco: null
  }

  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }

  adicionarProduto(): void {
    if(this.produto.nome != null && this.produto.preco != null){
      this.produtoService.create(this.produto).subscribe(() => {
        this.produtoService.CreateProduto('Produto adicionando com sucesso!');
        this.router.navigate(['']);
      })
    }
  }

  cancela(): void {
    this.router.navigate(['']);
  }
}