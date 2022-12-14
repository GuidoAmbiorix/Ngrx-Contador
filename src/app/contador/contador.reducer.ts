import { decrementar, incrementar, multiplicar, dividir, resetear } from './contador.actions';
import { Action, createReducer, on } from "@ngrx/store";

export const initialState = 10;

const _counterReducer = createReducer(initialState,
  on(incrementar, state => state + 1),
  on(decrementar,state => state - 1 ),
  on(multiplicar,state => state * 2),
  on(dividir, state => state / 2),
  on(resetear, state => state = 0)
  );

  export function reducerContador(state:any,action:any){
    return _counterReducer(state,action);
  }
