import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/models/product.interface';

export const loadProduct = createAction('[Product Component] LoadProduct');

export const loadProductSuccess = createAction(
  '[Product Component] LoadProductSuccess',
  props<{ products: Product[] }>()
);

export const loadProductFailure = createAction(
  '[Product Component] LoadProductFaliure',
  props<{ errorMessage: string }>()
);
