import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { Product } from '../shared/models/product.interface';
import { ProductApiService } from '../shared/services/product-api.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  http = inject(HttpClient);
  productApiService = inject(ProductApiService);
  products = this.productApiService.getProducts() as Observable<Product[]>;

  constructor(private store: Store<{cart: {products: Product[]}}>) {

  }

  ngOnInit() {}


  addItemToCart(product: Product) {
    this.store.dispatch(addToCart({product}));
  }
}
