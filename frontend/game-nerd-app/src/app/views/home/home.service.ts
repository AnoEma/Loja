import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/app/components/product/product-create/product.model';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  baseUrl = "http://localhost:2108/produto";


  constructor(private http: HttpClient) { }

  read():Observable<Produto[]>{
    return this.http.get<Produto[]>(this.baseUrl);
  }
}
