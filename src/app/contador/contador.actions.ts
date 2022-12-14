import { createAction } from "@ngrx/store";

export const incrementar = createAction('[Contador] Incrementar');
export const decrementar = createAction('[Contador] Decrementar');
export const multiplicar = createAction('[Contador] Multiplicar');
export const dividir = createAction('[Contador] Dividir');
export const resetear = createAction('[Contador] Resetear');
