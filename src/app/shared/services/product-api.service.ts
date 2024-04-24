import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { Product } from '../models/product.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products').pipe(
      map((products) => {
        return products.map((product: any) => {
          return { ...product, quantity: 1 };
        });
      })
    );
  }
}
