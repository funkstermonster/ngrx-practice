import { Component } from '@angular/core';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCartProducts, selectTotal } from '../states/cart/cart.selector';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  decrementProduct,
  incrementProduct,
  removeItem,
} from '../states/cart/cart.action';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartItems = this.store.select(selectCartProducts);
  totalPrice = this.store.select(selectTotal);

  constructor(private store: Store<AppState>) {}

  remove(productId: number) {
    this.store.dispatch(removeItem({ productId }));
  }

  increment(productId: number) {
    this.store.dispatch(incrementProduct({ productId }));
  }

  decrement(productId: number) {
    this.store.dispatch(decrementProduct({ productId }));
  }
}
