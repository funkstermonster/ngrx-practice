import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "./cart.reducer";
import { Product } from "../../shared/models/product.interface";


export const selectCartState = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
    selectCartState,
    (state: CartState) => state.products
);

export const selectTotal = createSelector(
    selectCartState,
    (state:CartState) => state.totalPrice
);

export const selectCartItemsCount = createSelector(
  selectCartProducts,
  (products: Product[]) => products.reduce((total, product) => total + product.quantity, 0)
);
