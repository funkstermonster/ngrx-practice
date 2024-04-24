import { createReducer, on } from '@ngrx/store';
import { Product } from '../../shared/models/product.interface';
import { addToCart, incrementProduct } from './cart.action';
import * as CartActions from './cart.action';

export interface CartState {
  products: Product[];
  totalPrice: number;
}

export const initialCounterState: CartState = {
  products: [],
  totalPrice: 0,
};

export function calculateTotalPrice(products: Product[]) {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}
export const cartReducer = createReducer(
  initialCounterState,
  on(CartActions.addToCart, (state, { product }) => {
    const updatedProducts = [...state.products, product];
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),

  on(CartActions.removeItem, (state, { productId }) => {
    const updatedProducts = state.products.filter(
      (product) => product.id !== productId
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),

  on(CartActions.incrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  }),
  on(CartActions.decrementProduct, (state, { productId }) => {
    const updatedProducts = state.products.map((product) =>
      product.id === productId
        ? { ...product, quantity: Math.max(0, product.quantity - 1) }
        : product
    );
    return {
      ...state,
      products: updatedProducts,
      totalPrice: calculateTotalPrice(updatedProducts),
    };
  })
);
