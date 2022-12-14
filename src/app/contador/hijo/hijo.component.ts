import * as actions from './../contador.actions';

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {

  contador!:number;

  constructor(private store:Store<{contador:number}>){
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  Multiplicar(){
    this.store.dispatch(actions.multiplicar());
  }

  Dividir(){
    this.store.dispatch(actions.dividir());
  }

}
