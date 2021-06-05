import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/components/product/product-create/product.model';
import { HomeService } from './home.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Produto[];

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  slides = [
    { 'image': 'assets/ordi2.png' },
    { 'image': 'assets/ps5.png' },
    { 'image': 'assets/pro.jpg' }
  ];
}
