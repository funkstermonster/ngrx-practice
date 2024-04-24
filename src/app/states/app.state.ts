import { CartState } from "./cart/cart.reducer";
import { CounterState } from "./counter/counter.reducer";

//here we have to register the global states
export interface AppState {
    counter: CounterState;
    cart: CartState
}