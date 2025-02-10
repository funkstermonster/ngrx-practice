import { inject, Injectable } from '@angular/core';
import { ProductApiService } from '../../shared/services/product-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './product.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class ProductEffect {

  constructor(private api: ProductApiService, private actions: Actions) {}

  loadProducts$ = createEffect(() =>
    this.actions.pipe(
      ofType(ProductActions.loadProduct),
      switchMap(() =>
        this.api.getProducts().pipe(
          map((res) => ProductActions.loadProductSuccess({ products: res })),
          catchError((error: { message: string }) =>
            of(
              ProductActions.loadProductFailure({
                errorMessage: 'Fail to load products.',
              })
            )
          )
        )
      )
    )
  );
}
