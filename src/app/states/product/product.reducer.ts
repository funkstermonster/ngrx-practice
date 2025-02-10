import { createReducer, on } from "@ngrx/store";
import { Product } from "../../shared/models/product.interface";
import * as ProductActions from './product.action';

export interface ProductState {
    products: Product[];
    errorMessage: string | null;
}

export const initialProductState: ProductState = {
    products: [],
    errorMessage: null
}

export const ProductReducer = createReducer(
    initialProductState,
    on(ProductActions.loadProductSuccess, (state, { products }) => ({
        ...state,
        products,
        errorMessage: null
    })),

    on(ProductActions.loadProductFailure, (state, { errorMessage }) => ({ 
        ...state,
        errorMessage: errorMessage
    }))
);
