import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.reducer";

export const selectProductsFeature = createFeatureSelector<ProductState>('product');

export const selectAllPRoducts = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.products
);

export const selectProductError = createSelector(
    selectProductsFeature,
    (state: ProductState) => state.errorMessage
);