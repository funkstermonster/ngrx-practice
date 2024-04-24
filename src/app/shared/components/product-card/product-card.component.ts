import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  @Output() handleAdd = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  addToCart(product: Product) {
    this.handleAdd.emit(product);
  }
}
