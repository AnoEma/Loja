import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Produto } from './product-create/product.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl = "http://localhost:2108/produto";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  CreateProduto(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(produto: Produto): Observable<Produto> {
    produto.dataCadastro = new Date();
    produto.codigoItem = Math.random().toString();
    return this.http.post<Produto>(this.baseUrl, produto);
  }

  read():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl);
  }
}