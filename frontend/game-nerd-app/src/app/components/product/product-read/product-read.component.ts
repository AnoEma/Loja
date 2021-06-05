import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../product-create/product.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  produtos: Produto[];
  displayedColumns = ['id', 'nome', 'preco', 'categoria', 'comprar', 'action'];

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos
    })
  }

  compra(): void{
    this.router.navigate(['produto/comprar']);
  }
}